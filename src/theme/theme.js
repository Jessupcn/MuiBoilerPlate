// Set MUI Theme
import { createMuiTheme } from '@material-ui/core/styles';
import { Palette } from './palette';
import { Props } from './props';

// create theme and apply defaults
export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320, // mobile minimum
      md: 768, // tablet minimum
      lg: 1024, // desktop minimum
      xl: 1420,
    },
  },
  typography: {
    // apply fonts here
    // fontFamily: "",
    // fontPrimary: "",
    // fontSecondary: "",
  },
  palette: Palette,
  props: Props,
});
