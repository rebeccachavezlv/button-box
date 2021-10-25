import React from 'react';

import { connect } from 'react-redux';

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

const Directory = ({items}) => (
    <div className='directory-menu'>
        {items.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = state => ({
    items: state.shop.items
})


export default connect(mapStateToProps)(Directory)