import { Text } from '@mantine/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import Card, { ICard } from '@/components/Card/Card';
import { listPortfolio } from '@/const';
import { useState } from 'react';
import MiniCard from '@/components/MiniCard/MiniCard';
import MiniCardInMainScreen from '@/components/MiniCard/MiniCardInMainScreen';

export default function Portfolio() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const [listMinusRepo, setListMinusRepo] = useState<ICard[]>([]);
  const [listRepo, setListRepo] = useState<ICard[]>(listPortfolio);
  const onMinusChange = (item: ICard) => {
    setListMinusRepo((prevList) => [...prevList, item]);
    setListRepo((prevList) => prevList.filter((i) => i.id !== item.id));
  };

  const onShowRepo = (item: ICard) => {
    setListRepo((prevList) => [...prevList, item]);
    setListMinusRepo((prevList) => prevList.filter((i) => i.id !== item.id));
  };
  const onActionRepo = (item: ICard, action: 'open' | 'remove') => {
    const updateCard = listRepo.map((i) => {
      if (i.id === item.id) {
        return { ...i, isHidden: action === 'open' ? false : true };
      }
      return i;
    });
    setListRepo(updateCard);
  };

  return (
    <div
      className={cx(classes.root, 'mobile:h-full mobile:flex-col mobile:pt-0')}
    >
      <div
        className={cx(
          'relative flex w-2/5 items-center justify-center mobile:h-1/3 mobile:w-full mobile:items-center mobile:p-0 mobile:text-center',
          classes.leftSection,
        )}
      >
        <div className="flex flex-col text-center">
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
          className=" relative flex h-full items-center
         justify-center  mobile:left-0 mobile:top-[10%] mobile:w-full mobile:p-[20px] mobile:px-5 tablet:left-[15%]"
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
            {listRepo.map((item) => {
              if (!item.isHidden)
                return (
                  <div className="mt-5 mr-5" key={item.id}>
                    <Card
                      card={item}
                      onMinusChange={onMinusChange}
                      onActionRepo={onActionRepo}
                    />
                  </div>
                );
              return (
                <div className="mt-5 mr-5" key={item.id}>
                  <MiniCardInMainScreen
                    card={item}
                    onActionRepo={onActionRepo}
                  />
                </div>
              );
            })}
          </div>
          {listMinusRepo.length > 0 && (
            <div className="absolute bottom-0 flex h-fit w-fit items-center justify-around rounded bg-gray-300 py-3 px-4 ">
              {listMinusRepo.map((item, index) => (
                <MiniCard key={index} card={item} onShowRepo={onShowRepo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
