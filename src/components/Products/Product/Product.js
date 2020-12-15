import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Product = ({ product }) => {
    return (
       <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography varient='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography varient='h5'>
                    {product.price}
                </Typography>
            </div>
            <Typography varient='h2' color='textSecondary'>
                {product.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
       </Card>
    )
}

export default Product
