import React from 'react'
import { withRouter } from 'react-router'

import './menu-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

const MenuItem = ({ title, imageGallery, mainImage, description, price, history, linkUrl, match }) => (
    <div className='menu-item'
        onClick={() => history.push(`item/${linkUrl}`) }
    >
        <div 
            style={{
            backgroundImage: `url(${mainImage})`
            }}
            className='background-image'
        >

        <div className='add-to-cart'>
            <CustomButton>ADD TO CART</CustomButton>
        </div>

        </div>

        <div className='content'>
            <div className='title'>{title}</div>
            <div className='price'>${price}</div>
            <div className='subtitle'>{description}</div>
        </div>
    </div>
)

export default withRouter(MenuItem)