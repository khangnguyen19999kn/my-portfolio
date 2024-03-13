import { createStyles } from '@mantine/core';

export const miniCardStyle = createStyles(() => ({
  containerMiniCard: {
    width: '45px',
    height: '45px',
    backgroundColor: 'blue',
    borderRadius: '5px',
    position: 'relative',
    ':hover': {
      backgroundColor: '#0000ffd4',
    },
  },
  containerCardInMainScreen: {
    width: '450px',
    height: '300px',
    borderRadius: '10px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 1919px ) and (min-width:1279px) ': {
      width: '250px',
      height: '200px',
    },
  },
  cardInMainScreen: {
    width: '80px',
    height: '80px',
    backgroundColor: 'blue',
    borderRadius: '5px',
    position: 'relative',
    ':hover': {
      backgroundColor: '#0000ffd4',
    },
  },
}));
3;
