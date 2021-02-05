/**
 * File for our app colors
 */
const Palette = {
  // green success
  success: {
    main: '#228B22',
  },
  // red error
  error: {
    main: '#B22222',
  },

  // single color:
  black: '#000000',

  // range of colors:
  white: {
    0: '#FFFFFF',
    1: '#B9D1FF',
  },

  // shades
  green: {
    light: '#',
    main: '#',
    dark: '#',
  },
};

// examples of applying some initial colors
Palette.background = { default: Palette.white[0] };
// Palette.primary = Palette.blue;
// Palette.secondary = Palette.red;

export { Palette };
