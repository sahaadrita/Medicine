import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product'
import NTcuff from '../../assets/NTcuff.JPG'

const products = [
{id:1, name: 'nt-cuff', description: 'Running', price:'56', image:NTcuff},
{id:2, name: 'Medam', description: 'Running', price:'100'},
{id:3, name: 'ROA-FORTE', description: 'Running'},
{id:4, name: 'Haem-Pure', description: 'Running'},
{id:5, name: 'NT-Cuff', description: 'Running'},
{id:6, name: 'NT-Cuff', description: 'Running'},
{id:8, name: 'NT-Cuff', description: 'Running'},
{id:9, name: 'NT-Cuff', description: 'Running'}
    
]

const Products =()=> {
  
    return(
    <main>
        <Grid container justify="center" spacing={4}>
        {products.map((product)=>(
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
               </Grid>
        ))}
        </Grid>
    </main>
    )
}
export default Products;
    
  