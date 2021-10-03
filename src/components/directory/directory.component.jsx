import React from 'react';

import './directory.styles.scss'

import Beads1 from './photos/Beads-2.PNG'
import Necklace1 from './photos/Necklace-1.PNG'
import Soup1 from './photos/Soup-1.PNG'

import MenuItem from '../menu-item/menu-item.component'


class Directory extends React.Component {
    state = {
        sections: [
            {
                title: 'necklaces',
                imageUrl: Beads1,
                id: 1,
                linkUrl: 'necklaces'
            },
            {
                title: 'bracelets',
                imageUrl: Necklace1,
                id: 2,
                linkUrl: ''
            },
            {
                title: 'shop all',
                imageUrl: Soup1,
                id: 3,
                size: 'large',
                linkUrl: 'shop'
            }
        ]
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }

}


export default Directory