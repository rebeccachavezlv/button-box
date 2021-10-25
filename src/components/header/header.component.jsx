import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss';

const Header = ({dropDownHidden, toggleDropDown}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/'>SHOP</Link>
            <Link className='option' to='/about'>ABOUT</Link>
            <CartIcon />
        </div>
        {
        !dropDownHidden ?
        <CartDropdown /> :
        null
        }
    </div>
);



const mapStateToProps = state => ({
    dropDownHidden: state.cart.dropDownHidden
})

export default connect(mapStateToProps)(Header)