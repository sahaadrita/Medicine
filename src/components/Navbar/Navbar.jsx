import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import logo from '../../assets/swadesh.jpg';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
  return (
    <>
     <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="swadesh" height="25px" className={classes.image} /> SWADESH PHARMA
          </Typography>
          <div className={classes.grow}/>
          </Toolbar>
          </AppBar>   
    </>
  )
}

export default Navbar