import { Text, Timeline } from '@mantine/core';
import { useStyles } from './styles';
import {
  IconBook2,
  IconBriefcase,
  IconCircleCheckFilled,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  return (
    <div className={cx(classes.root, 'mobile:flex-col')}>
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
          <Timeline.Item
            bullet={<IconCircleCheckFilled size={12} />}
            title={t('experience.title1')}
          >
            <Text color="dimmed" size="sm" className="mobile:text-[12px]">
              {t('experience.t2')}
            </Text>
            <Text size="xs" mt={4}>
              {t('experience.time5')}
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconBriefcase size={14} />}
            title={t('experience.title2')}
          >
            <Text color="dimmed" size="sm" className="mobile:text-[12px]">
              {t('experience.t3')}
            </Text>
            <Text size="xs" mt={4}>
              {t('experience.time4')}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconBriefcase size={14} />}
            title={t('experience.title3')}
          >
            <Text color="dimmed" size="sm" className="mobile:text-[12px]">
              {t('experience.t4')}
            </Text>
            <Text size="xs" mt={4}>
              {t('experience.time3')}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title={t('experience.title4')}
            bullet={<IconBriefcase size={14} />}
          >
            <Text color="dimmed" size="sm" className="mobile:text-[12px]">
              {t('experience.t5')}
            </Text>
            <Text size="xs" mt={4}>
              {t('experience.time2')}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title={t('experience.title5')}
            bullet={<IconBook2 size={14} />}
          >
            <Text color="dimmed" size="sm" className="mobile:text-[12px]">
              {t('experience.t6')}
            </Text>
            <Text size="xs" mt={4}>
              {t('experience.time1')}
            </Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}
