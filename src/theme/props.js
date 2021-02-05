import React from 'react';

// Dependencies for example
import Check from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlankIcon';

export const Props = {
  MuiButton: {
    color: 'primary',
    variant: 'contained',
    disableElevation: true,
    disableRipple: true,
  },

  // example with icons
  MuiCheckbox: {
    color: 'default',
    disableRipple: true,
    icon: <CheckBoxOutlineBlankIcon className="icon" />,
    checkedIcon: <Check className="icon" />,
  },

  MuiInputLabel: {
    shrink: true,
  },
};
