import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {
        id: '1',
        name: 'tv',
        description: 'Samsung TV 42 inch',
        price: '$500',
        image: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80'
    },
    {
        id: '2',
        name: 'laptop',
        description: 'Dell Laptop',
        price: '$1000',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

const Products = ({ product }) => {
    const classes = useStyles();
    return (
        <main className = {classes.content}>
            <div className = {classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                { products.map( (product) => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    );
                })}
            </Grid>
        </main>
    )
}

export default Products;
