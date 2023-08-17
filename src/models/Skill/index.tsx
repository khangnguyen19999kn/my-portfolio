import { Text, Highlight, Image, Tooltip } from '@mantine/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import JSLogo from '@/public/images/javascript.png';
import TSLogo from '@/public/images/typescript.png';
import ReactLogo from '@/public/images/react.png';
import NextLogo from '@/public/images/nextjs.png';
import NodeLogo from '@/public/images/node-js.png';
import MongoLogo from '@/public/images/mongodb.png';
import JavaLogo from '@/public/images/java.png';
import VueLogo from '@/public/images/vue.png';
const skills = [
  {
    name: 'JavaScript',
    logo: JSLogo,
    symbol: 'JS',
    exp: 'I have 4 years of experience in JavaScript. I have worked with many projects using JavaScript.',
  },
  {
    name: 'TypeScript',
    logo: TSLogo,
    symbol: 'TS',
    exp: 'I have 1 years of experience in TypeScript. I have worked with many projects using TypeScript.',
  },
  {
    name: 'ReactJS',
    logo: ReactLogo,
    symbol: 'React',
    exp: 'I have 3 years of experience in ReactJS. I have worked with many projects using ReactJS.',
  },
  {
    name: 'NextJS',
    logo: NextLogo,
    symbol: 'Next',
    exp: 'I have 1 years of experience in NextJS. I have worked with many projects using NextJS.',
  },
  {
    name: 'NodeJS',
    logo: NodeLogo,
    symbol: 'NodeJS',
    exp: 'I have 2 years of experience in NodeJS. I have worked with many projects using NodeJS.',
  },
  {
    name: 'MongoDB',
    logo: MongoLogo,
    symbol: 'MongoDB',
    exp: 'I have 2 years of experience in MongoDB. I have worked with many projects using MongoDB.',
  },
  {
    name: 'VueJS',
    logo: VueLogo,
    symbol: 'VueJS',
    exp: 'I have 1 years of experience in VueJS. I have worked with many projects using VueJS.',
  },
  {
    name: 'Java',
    logo: JavaLogo,
    symbol: 'Java',
    exp: 'Java was the first programming language I learned but I am not an expert in it',
  },
];

export default function Skill() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  return (
    <div className={cx(classes.root, 'mobile:flex-col ')}>
      <div
        className={cx(
          'w-2/5 text-center mobile:h-1/3 mobile:w-full mobile:items-center mobile:p-0 mobile:px-2 mobile:pt-[10px] mobile:text-center tablet:p-0 tablet:px-1',
          classes.leftSection,
        )}
      >
        <Text className={classes.titleSkills}>{t('skills.skills')}</Text>
        <Text className="text-[24px] mobile:text-[12px]">
          {t('skills.subSkills')}
        </Text>
        <Text className={cx('w-full text-xl mobile:text-xs', classes.noteText)}>
          ({t('skills.note')})
        </Text>
      </div>
      <div
        className={cx(
          'w-3/5 mobile:w-full mobile:grid-cols-3 mobile:p-0',
          classes.rightSection,
        )}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className={cx(classes.skill, 'mobile:mt-[10px] mobile:py-[0]')}
          >
            <Tooltip label={skill.exp} inline={false}>
              <a>
                <Image
                  src={skill.logo}
                  width={80}
                  height={80}
                  className="pb-2"
                />
                <Highlight
                  highlight={`${skill.name}`}
                  highlightStyles={{
                    backgroundColor: '#00000000',
                    color: '#e0a80d',
                  }}
                  className="hidden"
                >
                  {skill.name}
                </Highlight>
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}
