import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';   

import logo from '../../assets/images/commerce.png';
import useStyles from './styles';

const Navbar = ( { totalItems } ) => {
    const classes = useStyles();
    return (
        <>
            <AppBar postion="fixed" color = "inherit" className = {classes.appBar}>
                <Toolbar>
                    <Typography varient = "h6" className = {classes.title} color = "inherit">
                        <img src={logo} alt = "Ecommerce Website" height = "25px" className = {classes.image}/>
                        EcoWeb
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart item" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <AddShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar
