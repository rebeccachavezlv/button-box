import React from 'react';
import './item-detail.styles.scss'

import { useParams } from 'react-router';

import CustomButton from '../../components/custom-button/custom-button.component';

const ItemDetail = ({ items }) => {

    const { slug } = useParams();
    const currentItem = items.find(item => item.linkUrl === slug);
    const { title, description, imageGallery, price, mainImage } = currentItem

    return (
        <div className='item-detail'>
            <div className='image-gallery'>
                <div className='main-image'
                    style={{
                        backgroundImage: `url(${mainImage})`
                    }} 
                />
                    
                <div className='smaller-images'>
                    {imageGallery.map(photo => (
                        <div 
                            style={{
                            backgroundImage: `url(${photo})`
                            }}
                            className='gallery-image'
                        />
                    ))}
                </div>
            </div>

            
            <div className='details'>
                <div className='title'><h1>{title}</h1></div>
                <div className='price'><h2>${price}</h2></div>
                <div className='description'>{description}</div>
            </div>
            
            <div className='add-to-cart'>
                <CustomButton>ADD TO CART</CustomButton>
            </div>
        </div>
    )
}

export default ItemDetail