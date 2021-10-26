import React from 'react';
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ itemsInCart }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {itemsInCart.map(item => <CartItem key={item.id} item={item}/>)}
        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    itemsInCart: state.cart.itemsInCart
})

export default connect(mapStateToProps)(CartDropdown)