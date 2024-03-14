import { ICard } from '@/components/Card/Card';
import { miniCardStyle } from '@/components/MiniCard/miniCardStyle';
import { getURLImage } from '@/const/utils';
import { Tooltip } from '@mantine/core';
import { useState } from 'react';
interface IMiniCardProps {
  card: ICard;
  onActionRepo: (item: ICard, action: 'open' | 'remove') => void;
}
export default function MiniCardInMainScreen({
  card,
  onActionRepo,
}: IMiniCardProps) {
  const { logo, backgroundColor } = card.miniCard || {};

  const { classes, cx } = miniCardStyle({
    backgroundColorMiniCard: backgroundColor || '',
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cx(
        classes.containerCardInMainScreen,
        isOpen && 'animate-customPing',
      )}
    >
      <Tooltip label={card.title}>
        <button
          onDoubleClick={() => {
            setIsOpen(true);
            setTimeout(() => {
              onActionRepo(card, 'open');
            }, 500);
          }}
          className={classes.cardInMainScreen}
        >
          <img src={getURLImage(logo || '')} alt={card.title} />
        </button>
      </Tooltip>
    </div>
  );
}
