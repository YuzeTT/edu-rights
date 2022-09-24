import React from 'react'

import { grey } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* <SupervisedUserCircleIcon/> */}
              学生权益维护中心
            </Typography>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <HelpOutlineIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar