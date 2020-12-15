import React from 'react';
import { Grid } from '@material-ui/core';

const products = [
    {
        id: '1',
        name: 'tv',
        description: 'Samsung TV 42 inch'
    },
    {
        id: '2',
        name: 'laptop',
        description: 'Dell Laptop'
    }
];

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                { products.map(product => {
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>{product.name}</Grid>
                })}
            </Grid>
        </main>
    )
}

export default Products;
