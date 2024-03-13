import { cardStyle } from '@/components/Card/cardStyle';
import { getURLImage } from '@/const/utils';
import { IconX } from '@tabler/icons-react';
import { IconMinus } from '@tabler/icons-react';
import { IconArrowsDiagonal } from '@tabler/icons-react';
import { useState } from 'react';

type TBanner = {
  backgroundBanner: string;
  textBanner: string;
};
export interface ICard {
  id: number;
  title: string;
  listArticle: string[];
  imageIds: [string, string];
  link: string;
  banner: TBanner;
  isHidden?: boolean;
}
interface ICardProps {
  card: ICard;
  onMinusChange: (item: ICard) => void;
  onActionRepo: (item: ICard, action: 'open' | 'remove') => void;
}
export default function Card({
  card,
  onMinusChange,
  onActionRepo,
}: ICardProps) {
  const { listArticle, imageIds, link, banner, title } = card;
  const { backgroundBanner, textBanner } = banner;
  const [isClose, setIsClose] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const { classes, cx } = cardStyle({ backgroundBanner, isClose, isMinimize });
  return (
    <div className={classes.containerCard}>
      <div className={classes.banner}>{textBanner}</div>
      <div className={classes.windowControlButtons}>
        <div className="flex">
          <button
            onClick={() => {
              setIsClose(true);
              setTimeout(() => {
                onActionRepo(card, 'remove');
              }, 500);
            }}
            className={cx(classes.controlButton, classes.closeButton)}
          >
            <IconX className={classes.iconControlButton} />
          </button>
          <button
            onClick={() => {
              setIsMinimize(true);
              setTimeout(() => {
                onMinusChange(card);
              }, 500);
            }}
            className={cx(classes.controlButton, classes.minimizeButton)}
          >
            <IconMinus className={classes.iconControlButton} />
          </button>
          <div className={cx(classes.controlButton, classes.maximizeButton)}>
            <IconArrowsDiagonal className={classes.iconControlButton} />
          </div>
        </div>
        <div className={classes.titleCardRepo}>{title}</div>
      </div>
      <div className={classes.mainCard}>
        <img
          className={classes.imageMainCard}
          src={getURLImage(imageIds[0])}
          referrerPolicy="no-referrer"
        />
        <div className={classes.subMainCard}>
          <img
            className={cx(classes.imageMainCard, 'relative')}
            src={getURLImage(imageIds[1])}
            referrerPolicy="no-referrer"
          />
          <div className={cx(classes.wrapSubMainCard)}>
            <div className="relative flex h-full w-full items-center">
              <div className="m-auto flex w-3/4 flex-wrap justify-evenly">
                {listArticle.map((item, index) => (
                  <div key={index} className={classes.articleButton}>
                    {item}
                  </div>
                ))}
                <div className={classes.articleButton}>More...</div>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={classes.buttonLink}
              >
                link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
