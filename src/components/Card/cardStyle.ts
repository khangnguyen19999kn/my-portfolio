import { createStyles, keyframes, getStylesRef, px } from '@mantine/core';

const dropDown = keyframes({
  from: {
    height: '0',
  },
  to: {
    height: '100%',
  },
});
const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});
const fadeUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});
interface ICardStyle {
  backgroundBanner: string;
}
export const cardStyle = createStyles(
  (_theme, { backgroundBanner }: ICardStyle) => ({
    containerCard: {
      width: '450px',
      height: '300px',
      borderRadius: '10px',
      boxShadow: '0 0 10px 0px black',
      position: 'relative',
    },
    banner: {
      position: 'absolute',
      top: '10%',
      right: '-42px',
      width: '150px',
      height: '30px',
      zIndex: 1,
      transform: 'rotate(48deg)',
      clipPath: 'polygon(18% 0%, 72% 0%, 95% 100%, 0% 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '"Madimi One", sans-serif',
      fontWeight: 400,
      fontOpticalSizing: 'auto',
      backgroundColor: backgroundBanner,
    },
    windowControlButtons: {
      width: '100%',
      height: '20px',
      backgroundColor: '#e0e0e0',
      display: 'flex',
      paddingLeft: '3px',
      borderRadius: '3px 3px 0 0',
      cursor: 'pointer',
    },
    controlButton: {
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto 2px',
    },
    closeButton: {
      backgroundColor: '#f34f56',
    },
    minimizeButton: {
      backgroundColor: '#fac537',
    },
    maximizeButton: {
      backgroundColor: '#3aea49',
    },
    iconControlButton: {
      width: '80%',
      height: '80%',
    },
    mainCard: {
      width: '100%',
      height: '280px',
      position: 'relative',
      [`&:hover .${getStylesRef('subMainCard')}`]: {
        animation: `${dropDown} 0.3s ease-in forwards`,
        transition: 'height 0.3s ease-in',
      },
      [`&:hover .${getStylesRef('articleButton')}`]: {
        animation: `${fadeIn} 1s ease-in forwards`,
        transition: 'opacity 1s ease-in',
      },
      [`&:hover .${getStylesRef('buttonLink')}`]: {
        animation: `${fadeUp} 1.5s ease-in forwards`,
        transition: 'all 1s ease-in',
      },
    },
    imageMainCard: {
      width: '100%',
      height: '100%',
      borderRadius: '0 0 3px 3px',
    },
    subMainCard: {
      ref: getStylesRef('subMainCard'),
      width: '100%',
      height: '0',
      position: 'absolute',
      top: '0',
      left: '0',
    },
    wrapSubMainCard: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
    },
    articleButton: {
      ref: getStylesRef('articleButton'),
      backgroundColor: 'gray',
      width: 'fit-content',
      minWidth: '40px',
      height: '20px',
      padding: '5px',
      fontSize: '12px',
      opacity: 0,
      borderRadius: '3px',
      boxShadow: '0 0 5px 0px black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 400,
      fontFamily: `"Dancing Script", cursive`,
      fontOpticalSizing: 'auto',
      marginTop: '10px',
    },
    buttonLink: {
      ref: getStylesRef('buttonLink'),
      width: '50px',
      height: '20px',
      padding: '5px',
      fontSize: '15px',
      opacity: 0,
      backgroundColor: '#3391dfd1',
      borderRadius: '3px',
      boxShadow: '0 0 5px 0px black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 400,
      fontFamily: `"Dancing Script", cursive`,
      fontOpticalSizing: 'auto',
      marginTop: '10px',
      position: 'absolute',
      bottom: '15%',
      left: '45%',
      cursor: 'pointer',
      textTransform: 'capitalize',

      ':hover': {
        backgroundColor: '#ffffff',
        color: '#000000',
      },
    },
  }),
);
