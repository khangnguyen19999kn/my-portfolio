import { createStyles, keyframes } from '@mantine/core';

const shrinkCenter = keyframes({
  '0%': {
    transform: 'scaleX(1)',
  },
  '100%': {
    transform: 'scaleX(0)',
  },
});

export const useStyles = createStyles((theme) => ({
  leftSection: {
    backgroundColor: theme.colorScheme === 'dark' ? '#2b2c2c' : '#fbfbfb',
  },
  rightSection: {
    backgroundColor: theme.colorScheme === 'dark' ? '#2d2e2e' : '#fff',
  },

  text: {
    cursor: 'pointer',
    '@media (min-width: 640px) and (max-width: 1280px)': {
      fontSize: '12px',
    },
  },
  wrapperTextInfo: {
    backgroundColor: theme.colorScheme === 'dark' ? '#2d2e2e' : '#fff',
    animation: `${shrinkCenter} 3s ease-in-out forwards`,
    transformOrigin: 'center', // make sure the element shrinks from the center
  },
  textInfo: {
    color: '#979899',
    fontFamily: `"Dancing Script", cursive`,
    fontOpticalSizing: 'auto',
    fontWeight: 400,
    fontStyle: 'normal',
    textTransform: 'capitalize',
  },
  textTitleInfo: {
    color: '#979899',
    fontWeight: 'bold',
  },
}));
