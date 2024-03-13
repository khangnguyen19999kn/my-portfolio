import { ICard } from '@/components/Card/Card';
import { miniCardStyle } from '@/components/MiniCard/miniCardStyle';
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
  const { classes, cx } = miniCardStyle();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cx(
        classes.containerCardInMainScreen,
        isOpen && 'animate-ping',
      )}
    >
      <Tooltip label={card.title}>
        <button
          onDoubleClick={() => {
            setIsOpen(true);
            setTimeout(() => {
              onActionRepo(card, 'open');
            }, 1000);
          }}
          className={classes.cardInMainScreen}
        />
      </Tooltip>
    </div>
  );
}
