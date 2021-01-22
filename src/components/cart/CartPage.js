import React, { useState } from 'react'
import { Divider, Button } from 'antd';
import {deleted_success,successfullyBought} from '../utils/HelperFunctions'
import { MdRemoveCircleOutline } from 'react-icons/md'


const CartPage = () => {
    var items = global.shopcart;
    const [CartState, setCartState] = useState(items)

 
  

    const renderCart = CartState.map((item, index) => {
        return (<div>
            <h1>{item.title}</h1>
            <Button onClick={() => removeFromCart(index) } ><MdRemoveCircleOutline /></Button>
        </div>)
    })

    const removeFromCart = (index) => {
        var newState = [...CartState]
        newState.splice(index, 1);
        global.shopcart=newState;
        setCartState(newState)
        deleted_success();

    }
    return (
        <div>
            <Divider orientation="left">Shop Cart</Divider>
            <div>
                {renderCart}
            </div>

            <Button onClick={()=>successfullyBought()}>Buy me</Button>
        </div>
    )
}

export default CartPage
