import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';   

import logo from '../../assets/images/logo';

const Navbar = () => {
    return (
        <>
            <AppBar postion="fixed" color = "inherit" className = { classes.appBar}>
                <Toolbar>
                    <Typography varient = "h6" className = {classes.title} color = "inherit">
                        <img src={logo} alt = "Ecommerce Website" height = "25px" />
                        EcoWeb
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar
