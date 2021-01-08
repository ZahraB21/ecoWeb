import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const Cart = () => {
    return (
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title}>Your Shopping Cart</Typography>
            </div>
        </Container>
    )
}

export default Cart
