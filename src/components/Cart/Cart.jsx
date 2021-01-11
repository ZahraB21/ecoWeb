import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const Cart = () => {
    const isEmpty = true;

    const EmptyCart = () => {
        <Typography variant = "subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    }

    const FilledCart = () => {
        <Typography variant = "subtitle1">Your cart items: </Typography>
    }

    return (
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title}>Your Shopping Cart</Typography>
                { isEmpty ? <EmptyCart /> : <FilledCart />}
            </div>
        </Container>
    )
}

export default Cart
