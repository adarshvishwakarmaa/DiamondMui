import React, { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Link,NavLink } from "react-router-dom";
import "../styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";

const Headers = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle Drawer Toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", padding: 2 }}>
      <DiamondIcon sx={{ marginRight: 1, color: "blue" }} />
      <Typography color={"blue"} variant="h6" component="div" sx={{ flexGrow: 1,borderBottom:"1px solid orange" }}>
        Diamond
      </Typography>
      <ul className="mobile-navigation">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/menu"}>Diamonds</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
      </ul>
    </Box>
  );

  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "rgb(121, 121, 211)"}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <DiamondIcon sx={{ marginRight: 1, color: "blue" }} />
            <Typography color={"blue"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Diamond
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li><NavLink  to={"/"}>Home</NavLink ></li>
                <li><NavLink  to={"/menu"}>Diamonds</NavLink ></li>
                <li><NavLink  to={"/about"}>About</NavLink ></li>
                <li><NavLink  to={"/contact"}>Contact</NavLink ></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" }, "&  .MuiDrawer-paper":{
              boxSizing:"border-box",
              width:"200px"
            } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar/>
        </Box>
      </Box>
    </div>
  );
};

export default Headers;
