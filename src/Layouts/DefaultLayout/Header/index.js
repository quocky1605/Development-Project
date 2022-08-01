import { useState, Fragment, cloneElement, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import useStyles from "./styles";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../../../assets/logo.svg";

import { Link, useLocation } from "react-router-dom";
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const headerNav = [
  { path: "/", name: "Home" },
  {
    path: "/service",
    name: "Service",
    menuName: "Menu1",
    menuProps: [
      { name: "Custom Software Development", path: "/custom" },
      { name: "Mobile App Development", path: "/mobile" },
      { name: "Website Development", path: "/website" },
    ],
  },
  {
    path: "/revolution",
    name: "The Revolution",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const location = useLocation().pathname;
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (location === "/" && value !== 0) {
      setValue(0);
    } else if (location === "/service" && value !== 1) {
      setValue(1);
    } else if (location === "/revolution" && value !== 2) {
      setValue(2);
    } else if (location === "/about" && value !== 3) {
      setValue(3);
    } else if (location === "/contact" && value !== 4) {
      setValue(4);
    }
  }, [value, location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
              onClick={() => setValue(0)}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              className={classes.tabsContainer}
              onChange={handleChange}
            >
              {headerNav.map((route, index) => {
                if (route.menuName) {
                  return (
                    <Tab
                      className={classes.tab}
                      label={route.name}
                      key={index}
                      aria-controls={open ? route.menuName : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      value={index}
                    />
                  );
                } else {
                  return (
                    <Tab
                      className={classes.tab}
                      component={Link}
                      to={route?.path}
                      label={route.name}
                      key={index}
                      value={index}
                    />
                  );
                }
              })}
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
            {headerNav.map((route, index) => {
              if (route.menuName && route.menuProps) {
                return (
                  <Menu
                    id={route.menuName}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {route.menuProps.map((item, index) => (
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to={item.path}
                        key={index}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Menu>
                );
              }
              return false;
            })}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};
export default Header;
