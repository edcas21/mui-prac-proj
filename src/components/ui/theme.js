import { createTheme } from "@mui/material";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const headerText = "#e3e7e8";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: headerText,
      '&:hover': {
        color: arcOrange,
        opacity: 1,
      },
      "&.Mui-selected": {
        color: "white",
      }
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
    },
  },
});
