import React, { useState, useEffect } from "react";
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
  Menu,
  MenuItem,
  useMediaQuery, // media queries
} from "@mui/material";

// import logo from "../../assets/logo.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

// theme
import theme from "./theme";

// styling
// Note: When using styling objects if you need to make customizations with values provided by the theme, then you need to make sure to import it at the top of the file. 
const headerStyles = {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
  },
  logo: {
    height: "7em",
    textTransform: "none",
    [theme.breakpoints.down('md')]: {
      height: "6em",
    },
    [theme.breakpoints.down('xs')]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    height: "7em",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down('md')]: {
      height: "6em",
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
};

const StyledTab = styled((props) => <Tab component={Link} {...props} />)(
  ({ theme }) => ({
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  })
);

const StyledMenuItem = styled((props) => (
  <MenuItem component={Link} {...props} />
))({
  ...theme.typography.tab,
  opacity: 0.7,
  "&:hover": {
    opacity: 1,
  },
});

const StyledLogo = styled(Logo)(({ theme }) => ({
  ...headerStyles.logo,
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
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // state variables
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // handle event functions
  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobile" },
    { name: "Website Development", link: "/websites" },
  ];

  useEffect(() => {
    console.log(value);
    console.log(window.location.pathname);
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) setValue(0);
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobile":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) setValue(2);
        break;
      case "/about":
        if (value !== 3) setValue(3);
        break;
      case "/contact":
        if (value !== 4) setValue(4);
        break;
      case "/estimate":
        if (value !== 5) setValue(5);
        break;
      default:
        break;
    }
  }, [value]); // only run if value is updated

  // Storing a JSX expression in a variable
  const tabs = (
    <>
      <Tabs
        sx={{ ...headerStyles.tabContainer }}
        onChange={handleChange}
        value={value}
      >
        {/* <StyledTab label="Home" /> */}
        <StyledTab label="Home" to="/" />
        <StyledTab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(event) => handleClick(event)}
          label="Services"
          to="/services"
        />
        <StyledTab label="The Revolution" to="/revolution" />
        <StyledTab label="About Us" to="/about" />
        <StyledTab label="Contact Us" to="/contact" />
      </Tabs>
      <Button
        sx={headerStyles.button}
        variant="contained"
        color="secondary"
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </Button>
      {/* Menu */}
      <Menu
        sx={{
          "& .MuiMenu-paper": headerStyles.menu,
        }}
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, index) => (
          <StyledMenuItem
            key={option}
            to={option.link}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              handleClose();
              setValue(1);
            }}
            selected={index === selectedIndex && value === 1}
          >
            {option.name}
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <>
      <ElevationScroll>
        {/* Default position of "fixed" */}
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Box
              sx={headerStyles.logoContainer}
              component={Link}
              to="/"
              onClick={() => setValue(0)}
            >
              <StyledLogo />
            </Box>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box sx={headerStyles.toolbarMargin} />
    </>
  );
};

export default Header;
