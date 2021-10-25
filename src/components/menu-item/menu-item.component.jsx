import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart.actions'

import './menu-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

class MenuItem extends React.Component {
    render(){
        const currentItem = this.props.item
        const { title, mainImage, description, price, linkUrl } = currentItem
        const { history, addItemToCart } = this.props

        return(
            <div className='menu-item'>
                <div 
                    style={{
                    backgroundImage: `url(${mainImage})`
                    }}
                    className='background-image'
                >
        
                <div className='add-to-cart'>
                    <CustomButton onClick={() => addItemToCart(currentItem)}>ADD TO CART</CustomButton>
                </div>
                <div className='more-details'>
                    <CustomButton onClick={() => history.push(`item/${linkUrl}`)}>MORE DETAILS</CustomButton>
                </div>
        
                </div>
        
                <div className='content'>
                    <div className='title'>{title}</div>
                    <div className='price'>${price}</div>
                    <div className='subtitle'>{description}</div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: currentItem => dispatch(addItemToCart(currentItem))
  });



export default connect(null, mapDispatchToProps)(withRouter(MenuItem))