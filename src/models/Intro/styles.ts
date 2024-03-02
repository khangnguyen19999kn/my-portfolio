import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  leftSection: {
    height: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? '#292a2a' : '#f8f8f8',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 50px 0 150px',
  },
  rightSection: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 150px 0 50px',

    justifyContent: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? '#2b2c2c' : '#fcfcfc',
  },
  contentIntro: {
    lineHeight: '28px',
    color: '#979899',
    marginTop: '10px',
    font: 'italic 1.2rem "Fira Sans", serif',
    textTransform: 'none',
  },
  titleIntro: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#a4a5a6',
  },
}));
