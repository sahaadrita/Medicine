
import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'

import { Button } from 'bootstrap'
import Products from '..'
import useStyles from './styles'

const Product = ({product}) => {
    const classes= useStyles();
   
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} src={product.image} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" >
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                    <Typography variant='body2'>
                    <button>Go somewhere</button>
                    </Typography>    
                   
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    
                </CardActions>
                
            </Card>
            
        </div>
    )
}

export default Product;


