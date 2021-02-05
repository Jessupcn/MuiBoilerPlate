import { theme } from './theme';

export const MuiTypography = {
  root: {
    color: theme.palette.black,
  },

  // example for applying styles to variant
  body1: {
    // default variant, use classes below to specify
    fontSize: '20px',
    lineHeight: '24px',

    // example of using breakpoints
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '16px',
    //   lineHeight: '20px',
    // }

    '&.body1': {
      fontSize: '20px',
      lineHeight: '24px',
      // [theme.breakpoints.down('md')]: {
      //   fontSize: '16px',
      //   lineHeight: '20px',
      // }
    },
    '&.body2': {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },

  // h1 example
  // h1: {
  //   fontWeight: 400,
  //   fontSize: '72px',
  //   lineHeight: '72px',
  //   whiteSpace: 'pre-line',

  //   [theme.breakpoints.down('md')]: {
  //     fontSize: '64px',
  //     lineHeight: '64px',
  //   },
  // },
  // h2: {

  // },
  // ...

  gutterBottom: {
    marginBottom: '10px',
  },
};
