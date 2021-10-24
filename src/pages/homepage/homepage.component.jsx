import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss'

const HomePage = ({items}) => (

    <div className='homepage'>
        <Directory items={items} />
    </div>
)

export default HomePage