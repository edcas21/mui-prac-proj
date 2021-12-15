import React, { useState } from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

// components
import { Box } from "@mui/system";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
  Button,
} from "@mui/material";

import logo from "../../assets/logo.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

// theme
import theme from "./theme";

// styling
const headerStyles = {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    color: "white",
  },
};

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
}));

// functions
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <ElevationScroll>
        {/* Default position of "fixed" */}
        <AppBar position="fixed">
          <Toolbar disableGutters>
            {/* <Logo sx={headerStyles.logo} /> */}
            <Tabs sx={{ ...headerStyles.tabContainer }} value={value}>
              <StyledTab label="Home" />
              <StyledTab label="Services" />
              <StyledTab label="The Revolution" />
              <StyledTab label="About Us" />
              <StyledTab label="Contact Us" />
            </Tabs>
            <Button
              sx={headerStyles.button}
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box sx={headerStyles.toolbarMargin} />
    </>
  );
};

export default Header;
