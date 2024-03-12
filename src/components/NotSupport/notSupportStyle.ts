import { createStyles } from '@mantine/core';

export const useNotSupportStyle = createStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? '#2d2e2e' : '#fff',
  },
  text: {
    color: theme.colorScheme === 'dark' ? '#fff' : theme.colors.gray[7],
  },
}));
