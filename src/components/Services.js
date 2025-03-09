import React from 'react';
import Title from './Title';
import {serviceItem} from '../data';

export default function Services() {
    return (
        <section className='section services' id='services'>
            <Title first='Our' second='services' />
            <div className='section-center services-center'>
                {serviceItem.map((item) => (
                    <article key={item.id} className='service'>
                        <span className='service-icon'>
                            <i className={item.icon}></i>
                        </span>
                        <div className='service-info'>
                            <h4 className='service-title'>{item.title}</h4>
                            <p className='service-text'>{item.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
