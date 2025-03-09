import React from 'react';
import {navLinks, socialLinks} from '../data';

export default function Footer() {
    return (
        <footer className='section footer'>
            <ul className='footer-links'>
                {navLinks.map((item) => (
                    <li>
                        <a href={item.href} className='footer-link'>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
            <ul className='footer-icons'>
                {socialLinks.map((item) => {
                    const {href, icon, id} = item;

                    return (
                        <li key={id}>
                            <a href={href} className='footer-icon'>
                                <i className={icon}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p className='copyright'>
                copyright &copy; Backroads travel tours company
                <span id='date'>{new Date().getFullYear()}</span> all rights
                reserved
            </p>
        </footer>
    );
}
