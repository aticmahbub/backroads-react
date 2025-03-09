import React from 'react';

import Title from './Title';
import {tours} from '../data';

export default function Tour() {
    return (
        <section className='section' id='tours'>
            <Title first='featured' second='tours' />

            <div className='section-center featured-center'>
                {tours.map((item) => {
                    const {
                        id,
                        img,
                        date,
                        title,
                        desc,
                        country,
                        day,
                        cost,
                        icon,
                    } = item;
                    return (
                        <article key={id} className='tour-card'>
                            <div className='tour-img-container'>
                                <img src={img} className='tour-img' alt='' />
                                <p className='tour-date'>{date}</p>
                            </div>
                            <div className='tour-info'>
                                <div className='tour-title'>
                                    <h4>{title}</h4>
                                </div>
                                <p>{desc}</p>
                                <div className='tour-footer'>
                                    <p>
                                        <span>
                                            <i className={icon}></i>
                                        </span>{' '}
                                        {country}
                                    </p>
                                    <p>{day}</p>
                                    <p>{cost}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
