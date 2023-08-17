import { createStyles, keyframes } from '@mantine/core';

const zeroTopercent = (toWidth: number) =>
  keyframes({
    from: {
      width: '0%',
    },
    to: {
      width: `${toWidth}%`,
    },
  });
const warning = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  leftSection: {
    height: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? '#2b2c2c' : '#fbfbfb',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 50px 0 150px',
  },
  rightSection: {
    height: '100%',
    display: 'grid',
    padding: '100px',
    gridTemplateColumns: '30% 30%',
    '@media (min-width: 640px) and (max-width: 1279px)': {
      gridTemplateColumns: '50% 50%',
    },

    backgroundColor: theme.colorScheme === 'dark' ? '#2d2e2e' : '#ffffff',
  },
  titleSkills: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#a4a5a6',
    width: '100%',
  },
  skill: {
    width: 'fit-content',
    height: '100%',
    padding: '25px',
  },
  bar: {
    animation: `${zeroTopercent(80)} 1s ease-in-out`,
  },
  noteText: {
    animation: `${warning} 2s ease-in-out infinite`,
    color: '#ff0000',
  },
}));
