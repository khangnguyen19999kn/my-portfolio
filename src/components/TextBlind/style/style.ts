import { createStyles, keyframes } from '@mantine/core';

export const blind = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '50%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(0)',
  },
});

export const useStyles = createStyles(() => ({
  textContainer: {
    display: 'inline-block',
    whiteSpace: 'pre',
  },
  letter: {
    font: 'italic 1.2rem "Fira Sans", serif',
    textTransform: 'none',
    display: 'inline-block',
  },
  blind: {
    animation: `${blind} 2s infinite`,
    transformOrigin: 'center',
  },
}));
