import MarryTheNight1 from '../../assets/photos/marry-the-night-1.JPG'
import MarryTheNight2 from '../../assets/photos/marry-the-night-2.JPG'

import PerfectIllusion1 from '../../assets/photos/perfect-illusion-1.JPG'
import PerfectIllusion2 from '../../assets/photos/perfect-illusion-2.JPG'
import PerfectIllusion3 from '../../assets/photos/perfect-illusion-3.PNG'
import PerfectIllusion4 from '../../assets/photos/perfect-illusion-4.JPG'
import PerfectIllusion5 from '../../assets/photos/perfect-illusion-5.JPG'

import BiteMe1 from '../../assets/photos/bite-me-1.JPG'
import BiteMe2 from '../../assets/photos/bite-me-2.JPG'
import BiteMe3 from '../../assets/photos/bite-me-3.JPG'

export const ShopItems = [
    {
        title: 'Marry The Night',
        mainImage: MarryTheNight1,
        imageGallery: [MarryTheNight2],
        id: 1,
        price: 35,
        linkUrl: 'marry-the-night',
        description: 'Stainless steel. Cute lil dangly charms.',
        darkBackground: false
    },
    {
        title: 'Perfect Illusion',
        mainImage: PerfectIllusion1,
        imageGallery: [PerfectIllusion2, PerfectIllusion3, PerfectIllusion4, PerfectIllusion5],
        id: 2,
        price: 20,
        linkUrl: 'perfect-illusion',
        description: 'YOU are the perfect illusion.',
        darkBackground: false
    },
    {
        title: 'Bite Me',
        mainImage: BiteMe1,
        imageGallery: [BiteMe2, BiteMe3],
        id: 3,
        price: 25,
        linkUrl: 'bite-me',
        description: 'Just in time for Halloween. Spooky.',
        darkBackground: true
    }
]