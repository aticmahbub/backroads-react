import React from 'react';
import logo from '../images/logo.svg';

import {navLinks, socialLinks} from '../data';
export default function Navbar() {
    console.log(navLinks);
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='nav-logo' alt='backroads' />
                    <button
                        type='button'
                        className='nav-toggle'
                        id='nav-toggle'
                    >
                        <i className='fas fa-bars'></i>
                    </button>
                </div>
                <ul className='nav-links' id='nav-links'>
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.href} className='nav-link'>
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className='nav-icons'>
                    {socialLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.href} className='nav-icon'>
                                <i className={item.icon}></i>
                            </a>
                        </li>
                    ))}
                    {/* <li>
                        <a href='https://www.twitter.com' className='nav-icon'>
                            <i className='fab fa-facebook'></i>
                        </a>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}
