import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    width: '150px',
  },
  item: {
    '@media (max-width: 600px ) and (min-width:350px) ': {
      fontSize: '12px',
    },
  },
}));
