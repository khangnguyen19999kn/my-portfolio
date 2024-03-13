import { ICard } from '@/components/Card/Card';
import { miniCardStyle } from '@/components/MiniCard/miniCardStyle';
import { Tooltip } from '@mantine/core';
interface IMiniCardProps {
  card: ICard;
  onShowRepo: (item: ICard) => void;
}
export default function MiniCard({ card, onShowRepo }: IMiniCardProps) {
  const { classes } = miniCardStyle();
  return (
    <Tooltip label={card.title}>
      <button
        onClick={() => {
          onShowRepo(card);
        }}
        className={classes.containerMiniCard}
      />
    </Tooltip>
  );
}
