import { createStyles, getStylesRef, keyframes } from '@mantine/core';

const fadeIn = keyframes({
  from: {
    transform: 'translate(0, 200px)',
  },
  to: {
    transform: 'translate(0, 0)',
  },
});
const fallingAndBouncing = keyframes({
  '0%': {
    transform: 'translate(0, -200px)',
    animationTimingFunction: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
  },
  '50%': {
    transform: 'translate(0, -100px)',
    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
  },
  '100%': {
    transform: 'translate(0, 0)',
  },
});
const showUp = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});
const changeColorTextInfinity = keyframes({
  '0%': {
    color: '#feea98',
  },
  '25%': {
    color: '#fdd733',
  },
  '50%': {
    color: '#feb200',
  },
  '75%': {
    color: '#f14b20',
  },
  '100%': {
    color: '#ffffff',
  },
});
const shadowAvatar = keyframes({
  '0%': { padding: '5px', opacity: '0.10 ', marginTop: '20px' },
  '50%': { padding: '15px', opacity: '0.18', marginTop: '10px' },
  '100%': { padding: '5px', opacity: '0.10', marginTop: '20px' },
});
const bounce = keyframes({
  '0%': {
    marginTop: '15px',
    marginBottom: '10px',
  },
  '50%': {
    marginTop: '22px',
    marginBottom: '3px',
  },
  '100%': {
    marginTop: '15px',
    marginBottom: '10px',
  },
});
export const useStyles = createStyles((theme) => ({
  leftSection: {
    backgroundColor: theme.colorScheme === 'dark' ? '#2b2c2c' : '#fbfbfb',
  },
  rightSection: {
    backgroundColor: theme.colorScheme === 'dark' ? '#2d2e2e' : '#fff',
  },
  textFirstName: {
    fontSize: '70px',
    color: '#a4a5a6',
    animation: `${fadeIn} 3s ease-in-out forwards`,
    fontFamily: `"Dancing Script", cursive`,
    fontOpticalSizing: 'auto',
    fontWeight: 400,
    fontStyle: 'normal',
    textTransform: 'capitalize',
  },
  textLastName: {
    fontSize: '80px',
    fontWeight: 'bold',
    color: '#e0a80d',
    animation: `${fadeIn} 3s ease-in-out forwards`,
  },
  lastName: {
    transition: `all 0.3s ease-in-out`,
    animation: `${changeColorTextInfinity} 2s ease-in-out infinite`,
    fontFamily: `"Dancing Script", cursive`,
    fontOpticalSizing: 'auto',
    fontWeight: 400,
    fontStyle: 'normal',
    textTransform: 'capitalize',
  },
  iconFB: {
    color: '#717273',
    ref: getStylesRef('iconFb'),
  },
  btnFb: {
    backgroundColor:
      theme.colorScheme === 'dark' ? '#3f4040!important' : '#ededed!important',
    animation: `${fallingAndBouncing} 3s ease-in-out forwards`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? '#323333!important'
          : '#ffffff!important',
      [`& .${getStylesRef('iconFb')}`]: {
        color: '#e0a80d',
      },
    },
  },
  text: {
    cursor: 'pointer',
  },
  textPosition: {
    fontSize: '21px',
    color: '#979899',
    animation: `${fadeIn} 3s ease-in-out forwards`,
  },
  textInfo: {
    color: '#979899',
  },
  textTitleInfo: {
    color: '#979899',
    fontWeight: 'bold',
  },
  avatar: {
    borderRadius: '100px',
    animation: `${bounce} 2s infinite`,
  },
  shadowAvatar: {
    width: '150px',
    height: '20px',
    borderRadius: '100%',
    backgroundColor: '#2F2D2C',
    margin: '20px auto 0 auto',
    animation: `${shadowAvatar} 2s infinite`,
  },
  wrapperAvatar: {
    animation: `${showUp} 3s ease-in-out forwards`,
  },
}));
