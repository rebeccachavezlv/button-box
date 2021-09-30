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
                id: 1
            },
            {
                title: 'bracelets',
                imageUrl: Necklace1,
                id: 2
            },
            {
                title: 'shop all',
                imageUrl: Soup1,
                id: 3,
                size: 'large'
            }
        ]
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        );
    }

}


export default Directory