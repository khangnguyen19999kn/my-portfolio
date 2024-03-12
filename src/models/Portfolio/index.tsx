import { Text } from '@mantine/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import Card from '@/components/Card/Card';
import { listPortfolio } from '@/const';

export default function Portfolio() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  return (
    <div
      className={cx(classes.root, 'mobile:h-full mobile:flex-col mobile:pt-0')}
    >
      <div
        className={cx(
          'relative w-2/5 mobile:h-1/3 mobile:w-full mobile:items-center mobile:p-0 mobile:text-center',
          classes.leftSection,
        )}
      >
        <div className="absolute top-[40%] right-[10%] mobile:right-[25%] ">
          <Text className={classes.titleExp}>{t('portfolio.portfolio')}</Text>
          <Text>{t('portfolio.subPortfolio')}</Text>
        </div>
      </div>
      <div
        className={cx(
          'relative w-3/5 mobile:w-full mobile:p-0',
          classes.rightSection,
        )}
      >
        <div
          className=" flex h-full items-center justify-center
         mobile:left-0  mobile:top-[10%] mobile:w-full mobile:p-[20px] mobile:px-5 tablet:left-[15%]"
        >
          {/* <div>
            <Text>{t('portfolio.t1')}</Text>
            <a
              href="https://github.com/khangnguyen19999kn"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <IconBrandGithubFilled className={classes.icon} />
              </Button>
            </a>
          </div> */}
          <div className="flex h-1/2 flex-wrap justify-around laptop:h-4/5 desktop:h-4/5">
            {listPortfolio.map((item) => (
              <div className="mt-5 mr-5" key={item.imageIds[0]}>
                <Card
                  listArticle={item.listArticle}
                  imageIds={item.imageIds}
                  link={item.link}
                  banner={item.banner}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
