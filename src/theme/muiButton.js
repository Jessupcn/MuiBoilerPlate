/**
 * EXAMPLE FILE:
 * example of how to structure override file
 */

import { theme } from './theme';
// import textlinkArrow from './icon-path' <-- if we want to put on arrow icon

export const MuiButton = {
  root: {
    textTransform: 'none',
  },

  contained: {
    // css here
  },
  containedPrimary: {
    // css
  },
  containedSecondary: {
    // css
  },

  outlined: {
    // css here
  },
  outlinedPrimary: {
    // css
  },
  outlinedSecondary: {
    // css
  },

  label: {
    // css
    // fontsize: '14px' ??
  },
};
