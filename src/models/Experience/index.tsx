import { Text, Timeline } from '@mantine/core';
import { useStyles } from './styles';
import { IconBook2, IconBriefcase } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { t } from 'i18next';

const timeLineItems = [
  {
    title: 'experience.title2',
    content: 'experience.t3',
    time: 'experience.time4',
    icon: <IconBriefcase size={14} />,
  },
  {
    title: 'experience.title6',
    content: 'experience.t7',
    time: 'experience.time6',
    icon: <IconBriefcase size={14} />,
  },
  {
    title: 'experience.title3',
    content: 'experience.t4',
    time: 'experience.time3',
    icon: <IconBriefcase size={14} />,
  },
  {
    title: 'experience.title4',
    content: 'experience.t5',
    time: 'experience.time2',
    icon: <IconBriefcase size={14} />,
  },
  {
    title: 'experience.title5',
    content: 'experience.t6',
    time: 'experience.time1',
    icon: <IconBook2 size={14} />,
  },
];
interface ItemTimeLine {
  title: string;
  content: string;
  time: string;
  icon: JSX.Element;
}

export default function Experience() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const [listItemTimeLine, setListItemTimeLine] = useState<ItemTimeLine[]>([]);
  const [activeSection, setActiveSection] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const experineceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection(true);
        } else {
          setActiveSection(false);
          setListItemTimeLine([]);
          setCurrentItem(0);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(experineceRef.current as Element);
  }, [currentItem]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentItem < timeLineItems.length && activeSection) {
        setListItemTimeLine((prevItems) => [
          ...prevItems,
          timeLineItems[currentItem],
        ]);
        setCurrentItem((prevIndex) => prevIndex + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [activeSection, currentItem]);

  // useEffect(() => {
  //   let animationFrameId: number;

  //   const loop = () => {
  //     if (currentItem < timeLineItems.length && activeSection) {
  //       setListItemTimeLine((prevItems) => [
  //         ...prevItems,
  //         timeLineItems[currentItem],
  //       ]);
  //       setCurrentItem((prevIndex) => prevIndex + 1);
  //     }

  //     animationFrameId = requestAnimationFrame(loop);
  //   };

  //   if (activeSection) {
  //     animationFrameId = requestAnimationFrame(loop);
  //   }

  //   return () => cancelAnimationFrame(animationFrameId);
  // }, [activeSection, currentItem]);
  return (
    <div ref={experineceRef} className={cx(classes.root, 'mobile:flex-col')}>
      <div
        className={cx(
          'w-2/5 text-center mobile:w-full mobile:items-center mobile:p-0 mobile:text-center',
          classes.leftSection,
        )}
      >
        <Text className={cx(classes.titleExp, 'mobile:text-[20px]')}>
          {t('experience.experience')}
        </Text>
        <Text className="w-full text-xl mobile:text-[14px]">
          {t('experience.t1')}
        </Text>
      </div>
      <div
        className={cx(
          'w-3/5 mobile:w-full mobile:py-0 mobile:px-1',
          classes.rightSection,
        )}
      >
        <Timeline active={2} bulletSize={30} lineWidth={2}>
          {listItemTimeLine.map((item) => (
            <Timeline.Item
              key={item.title}
              title={t(item.title)}
              bullet={item.icon}
              className={classes.timeLineItem}
            >
              <Text color="dimmed" size="sm" className="mobile:text-[12px]">
                {t(item.content)}
              </Text>
              <Text size="xs" mt={4}>
                {t(item.time)}
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
