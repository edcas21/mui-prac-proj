import React from "react";
import { ThemeProvider } from "@emotion/react";

// components
import { Box } from "@mui/system";

// theme
import theme from "./ui/theme";

import Header from "./ui/header.component";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        Hello!
      </Box>
    </ThemeProvider>
  );
};

export default App;
