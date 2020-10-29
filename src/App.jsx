import './App.css';

import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './theme';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Navigation Menu"
              aria-controls="nav-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <HomeIcon />
                Home
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <PersonIcon />
                About
              </MenuItem>
            </Menu>
            <Typography variant="h6">
              Jake Weidokal
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <p>test</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
