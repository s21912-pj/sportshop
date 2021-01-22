import React from 'react'
import { useParams } from "react-router-dom";
import { Image,Divider,Layout,Button  } from 'antd';
import {DetailsContainer,Description} from './ProductDetailsStyles'
import {addProductToCart} from '../utils/HelperFunctions'



const ProductDetails = () => {
    let { id } = useParams()
    let product = global.products.filter(x=>x.id===parseInt(id))[0];
    return (
       <DetailsContainer className="lol">
            <h1>{product.title}</h1>
            <Image width={200} src={product.image}/>
            <Button style={{margin:'10px',color:'green'}} onClick={()=>{addProductToCart(product)}}>Add to Cart+</Button>
            <Divider/>
            <Divider/>
            <Description>{product.description}</Description>
            <Divider/>
            <span>Price: ${product.price}</span>
            <Divider/>
            <span>Available products: {product.quantity}</span>
            <Divider/>
            <span>Material: {global.sportwearMaterialType[product.material-1].name} 100%</span>
            <Divider/>
            <span>Brand: {global.brand[product.brand-1].name}</span>
            <Divider/>
           
      </DetailsContainer>
      
    )
}

export default ProductDetails
