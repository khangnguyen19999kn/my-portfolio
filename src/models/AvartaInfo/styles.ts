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

export const useStyles = createStyles((theme) => ({
  leftSection: {
    backgroundColor: theme.colorScheme === 'dark' ? '#2b2c2c' : '#fbfbfb',
  },
  rightSection: {
    backgroundColor: theme.colorScheme === 'dark' ? '#2d2e2e' : '#fff',
  },
  textFirstName: {
    fontSize: '60px',
    color: '#a4a5a6',
    animation: `${fadeIn} 3s ease-in-out forwards`,
  },
  textLastName: {
    fontSize: '67px',
    fontWeight: 'bold',
    color: '#e0a80d',

    animation: `${fadeIn} 3s ease-in-out forwards`,
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
    animation: `${showUp} 3s ease-in-out forwards`,
  },
}));
