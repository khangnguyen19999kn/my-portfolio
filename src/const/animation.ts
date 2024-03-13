import { keyframes } from '@mantine/core';

export const dropDown = keyframes({
  from: {
    height: '0',
  },
  to: {
    height: '100%',
  },
});
export const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});
export const fadeUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});
export const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});
export const minimizeEffect = keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0) scale(.9) ',
  },
  to: {
    opacity: 0,
    transform: 'translateY(60vh) scale(0)',
  },
});
export const openRepoEffect = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(100vh) scale(0)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});
