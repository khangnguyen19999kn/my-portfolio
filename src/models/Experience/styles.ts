import { createStyles, keyframes } from '@mantine/core';
const moveRightToLeft = keyframes({
  '0%': {
    transform: 'translateX(100%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
});
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

  titleExp: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#a4a5a6',
    width: '100%',
  },
  timeLineItem: {
    animation: `${moveRightToLeft} 1s ease-in-out`,
    transition: 'all 1s ease-in-out',
  },
}));
