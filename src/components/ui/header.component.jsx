import React from "react";
import { Box } from "@mui/system";
import { AppBar, Toolbar, useScrollTrigger, Typography } from "@mui/material";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll>
        {/* Default position of "fixed" */}
        <AppBar>
          <Toolbar>Arc Development</Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default Header;
