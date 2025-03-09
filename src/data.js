import img1 from './images/tour-1.jpeg';
import img2 from './images/tour-2.jpeg';
import img3 from './images/tour-3.jpeg';
import img4 from './images/tour-4.jpeg';

export const navLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},
];

export const socialLinks = [
    {id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook'},
    {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id: 1, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace'},
];

export const serviceItem = [
    {
        id: 1,
        title: 'saving money',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisici elit. Asperiores, officia.',
        icon: 'fas fa-wallet fa-fw',
    },
    {
        id: 2,
        title: 'endless hiking',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisici elit. Asperiores, officia.',
        icon: 'fas fa-tree fa-fw',
    },
    {
        id: 1,
        title: 'amazing comfort',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisici elit. Asperiores, officia.',
        icon: 'fas fa-socks fa-fw',
    },
];

export const tours = [
    {
        id: 1,
        img: img1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.',
        country: 'china',
        day: '6 days',
        cost: 'from $2100',
        icon: '',
    },
    {
        id: 2,
        img: img2,
        date: 'october 1th, 2020',
        title: 'best of java',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.',
        country: 'indonesia',
        day: '11 days',
        const: 'from $1400',
        icon: 'fas fa-map',
    },
    {
        id: 3,
        img: img3,
        date: 'december 13th, 2020',
        title: 'explore hong kong',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.',
        country: 'hong kong',
        day: '8 days',
        cost: 'from $5100',
    },
    {
        id: 4,
        img: img4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.',
        country: 'kenya',
        day: '20 days',
        const: 'from $3300',
    },
];
