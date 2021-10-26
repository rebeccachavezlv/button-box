import React from 'react';
import './cart-item.styles.scss';


const CartItem = ({item}) => {
    const { title, price, mainImage } = item
    
    return(
        <div className='cart-item'>
            <img alt='' src={mainImage}></img>
            <div className='item-details'>
                <div className='name'>{title}</div>
                <div className='price'>${price}</div>
            </div>
        </div>
    );
}

export default CartItem