import { cardStyle } from '@/components/Card/cardStyle';
import { getURLImage } from '@/const/utils';
import { IconX } from '@tabler/icons-react';
import { IconMinus } from '@tabler/icons-react';
import { IconArrowsDiagonal } from '@tabler/icons-react';

// const listArticle = [
//   'CSS',
//   'HTML',
//   'React',
//   'Nodejs',
//   'Express',
//   'MongoDB',
//   'Javascript',
//   'Typescript',
//   'Redux',
//   'Material-UI',
// ];
export interface ICardProps {
  listArticle: string[];
  imageIds: [string, string];
  link: string;
}
export default function Card({ listArticle }: ICardProps) {
  const { classes, cx } = cardStyle();
  return (
    <div className={classes.containerCard}>
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
          src={getURLImage('1HLtHgjgVxp-SPIwPeGE5F2qYRYfE66Yu')}
          referrerPolicy="no-referrer"
        />
        <div className={classes.subMainCard}>
          <img
            className={cx(classes.imageMainCard, 'relative')}
            src={getURLImage('1tE1Li3wVPYwIRf4qZDv6GaF4UgtA2Tzo')}
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
                href="https://oasisfragrance.shop/"
                target="_blank"
                rel="noreferrer"
                className={classes.buttonLink}
              >
                link
              </a>
            </div>
            {/* <div className={classes.articleButton}>CSS</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
