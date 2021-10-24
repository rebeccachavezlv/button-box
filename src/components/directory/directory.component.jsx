import React from 'react';

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

const Directory = (props) => (
    <div className='directory-menu'>
        {props.items.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);



export default Directory