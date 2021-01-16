import { createMuiTheme } from "@material-ui/core";
import { COLORS } from "../styles/colors";

export const MAIN_THEME = createMuiTheme({
  palette: {
    primary: {
      main: `${COLORS.colorDark}`,
    },
    secondary: {
      main: `${COLORS.colorYellow}`,
    },
  },
});
