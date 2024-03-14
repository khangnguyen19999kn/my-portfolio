import { ICard } from '@/components/Card/Card';
import { miniCardStyle } from '@/components/MiniCard/miniCardStyle';
import { getURLImage } from '@/const/utils';
import { Tooltip } from '@mantine/core';
interface IMiniCardProps {
  card: ICard;
  onShowRepo: (item: ICard) => void;
}
export default function MiniCard({ card, onShowRepo }: IMiniCardProps) {
  const { logo, backgroundColor } = card.miniCard || {};

  const { classes } = miniCardStyle({
    backgroundColorMiniCard: backgroundColor || '',
  });
  return (
    <Tooltip label={card.title}>
      <button
        onClick={() => {
          onShowRepo(card);
        }}
        className={classes.containerMiniCard}
      >
        <img src={getURLImage(logo || '')} alt={card.title} />
      </button>
    </Tooltip>
  );
}
