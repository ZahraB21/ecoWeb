import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const Cart = ( { cart }) => {
    const isEmpty = !cart.line_items.length;

    const EmptyCart = () => {
        <Typography variant = "subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    }

    const FilledCart = () => {
        <>
            <Grid container spacing ={3}>
                {cart.line_items.map(item => 
                <Grid item xs={12} sm={4} key={item.id}>
                    <div>{item.name}</div>
                </Grid>)}
            </Grid>
        </>
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
