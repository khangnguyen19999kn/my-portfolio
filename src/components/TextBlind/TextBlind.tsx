import { useCallback, useEffect, useRef } from 'react';
import { useStyles } from './style/style';

interface ITextBlind {
  text: string;
  className?: string;
}
const TextBlind = ({ text, className }: ITextBlind) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { classes, cx } = useStyles();

  const animateLetters = useCallback(
    (letters: NodeListOf<HTMLElement>, index: number) => {
      if (index < letters.length) {
        letters[index].classList.add(classes.blind);
        requestAnimationFrame(() => animateLetters(letters, index + 1));
      }
    },
    [classes.blind],
  );

  useEffect(() => {
    if (containerRef.current) {
      const letters = containerRef.current.querySelectorAll('span');
      animateLetters(letters, 0);
    }
  }, [animateLetters, classes.blind, text]);

  return (
    <div ref={containerRef} className={cx(classes.textContainer, className)}>
      {text.split('').map((char, index) => (
        <span key={index} className={classes.letter}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextBlind;
