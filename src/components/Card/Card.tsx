import { cardStyle } from '@/components/Card/cardStyle';
import { getURLImage } from '@/const/utils';
import { Modal } from 'antd/lib';
import { useDisclosure } from '@mantine/hooks';
import { IconX } from '@tabler/icons-react';
import { IconMinus } from '@tabler/icons-react';
import { IconArrowsDiagonal } from '@tabler/icons-react';
type TBanner = {
  backgroundBanner: string;
  textBanner: string;
};
export interface ICardProps {
  listArticle: string[];
  imageIds: [string, string];
  link: string;
  banner: TBanner;
}
export default function Card({
  listArticle,
  imageIds,
  link,
  banner,
}: ICardProps) {
  const { backgroundBanner, textBanner } = banner;
  const { classes, cx } = cardStyle({ backgroundBanner });
  return (
    <div className={classes.containerCard}>
      <div className={classes.banner}>{textBanner}</div>
      <div className={classes.windowControlButtons}>
        <div className={cx(classes.controlButton, classes.closeButton)}>
          <IconX className={classes.iconControlButton} />
        </div>
        <div className={cx(classes.controlButton, classes.minimizeButton)}>
          <IconMinus className={classes.iconControlButton} />
        </div>
        <div className={cx(classes.controlButton, classes.maximizeButton)}>
          <IconArrowsDiagonal className={classes.iconControlButton} />
        </div>
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
