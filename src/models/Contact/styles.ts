import { createStyles } from '@mantine/core';

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

  textInfo: {
    color: '#979899',
  },
  textTitleInfo: {
    color: '#979899',
    fontWeight: 'bold',
  },
}));
