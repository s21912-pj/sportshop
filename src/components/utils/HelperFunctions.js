import React from 'react'
import MiniProductDetails from '../../components/main/MiniProductDetails'
import { Modal,message } from 'antd'




export const Info = (product) => {
    return (
        Modal.info({
            content: (
            <MiniProductDetails item={product}/>)
        }))
}

export const addProductToCart =(product)=>{
    global.shopcart.push(product);
    success()
}

export const removeFromProductList =(product)=>{

}

export const deleted_success = () => {
    message.success({
        content: 'Product deleted from the list.',
        duration: 1,
        style: {
            marginTop: '10vh',
        },
    });
};

const success = () => {
    message.success({
        content: 'Product added to cart.',
        duration: 2,
        style: {
            marginTop: '10vh',
        },
    });
};


export const successfullyBought = () => {
    message.success({
        content: 'We will sent your parcel as soon as possible.Thanks!',
        duration: 5,
        style: {
            marginTop: '15vh',
        },
    });
};

