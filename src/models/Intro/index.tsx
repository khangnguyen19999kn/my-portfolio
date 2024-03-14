import { Text } from '@mantine/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import TypingText from './components/TypingText';

export default function Intro() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  return (
    <div className={cx(classes.root, 'mobile:flex-col')}>
      <div
        className={cx(
          'flex w-2/5 flex-col items-center justify-center mobile:h-1/3 mobile:w-full mobile:p-0 tablet:w-2/5 tablet:p-0 laptop:w-2/5',
          classes.leftSection,
        )}
      >
        <Text className={classes.titleIntro}>{t('intro.intro')}</Text>
        <Text>{t('intro.subIntro')}</Text>
      </div>
      <div
        className={cx(
          'w-3/5  p-10 mobile:w-full mobile:overflow-y-auto mobile:p-0 mobile:px-3 laptop:w-3/5',
          classes.rightSection,
        )}
      >
        <div>
          <TypingText text={t('intro.t2')} speed={20} />
        </div>
      </div>
    </div>
  );
}
