import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
  },
  leftSection: {
    height: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? '#292a2a' : '#f8f8f8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 50px 0 150px',
  },
  rightSection: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 10px 0 50px',

    justifyContent: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? '#2b2c2c' : '#fcfcfc',
  },
  titleExp: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#a4a5a6',
  },
  buttonSend: {
    backgroundColor: '#a4a5a6!important',
    color: '#292a2a!important',
    '&:hover': {
      backgroundColor: '#228be6!important',
      color: '#ffffff!important',
      transition: 'all 0.3s ease-in-out',
    },
  },
}));
