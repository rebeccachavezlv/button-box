import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux'
import { toggleDropDown } from '../../redux/cart/cart.actions'


import { ReactComponent as Icon } from '../../assets/shopping-bag.svg'

const CartIcon = ({totalItems, toggleDropDown}) => (
    <div className='cart-icon' onClick={() => toggleDropDown()}>
        <Icon className='shopping-icon' />
        <span className='item-count'>{totalItems}</span>
    </div>
);


const mapStateToProps = state => ({
    totalItems: state.cart.totalItems
});

const mapDispatchToProps = dispatch => ({
    toggleDropDown: () => dispatch(toggleDropDown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)