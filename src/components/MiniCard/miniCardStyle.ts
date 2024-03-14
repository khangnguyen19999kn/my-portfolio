import { createStyles } from '@mantine/core';

export const miniCardStyle = createStyles(
  (
    _theme,
    { backgroundColorMiniCard }: { backgroundColorMiniCard: string },
  ) => ({
    containerMiniCard: {
      width: '45px',
      height: '45px',
      backgroundColor: backgroundColorMiniCard,
      borderRadius: '5px',
      padding: '5px',
      marginRight: '5px',
      ':nth-last-child': {
        marginRight: 0,
      },
      position: 'relative',
      ':hover': {
        opacity: 0.8,
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
      backgroundColor: backgroundColorMiniCard,
      borderRadius: '5px',
      position: 'relative',
      padding: '10px',
      border: '1px solid #00000036',
      ':hover': {
        opacity: 0.8,
        boxShadow: '0 0 10px 0px #000000',
      },
    },
  }),
);
3;
