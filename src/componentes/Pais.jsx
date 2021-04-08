import s from './Card.module.css'
import React from 'react';
import {Link} from 'react-router-dom'


export default function Card({img,name,population,region,capital}){



    return (
        
        <div className={s.container}>
            <img loading="lazy" src={img} alt=""/>
            <div className={s.data}>
            <h2 className={s.title}> <Link className={s.link} to={`/detalle/${name}`} >{name}</Link></h2>
            <p><strong>Population: </strong> {population}</p>
            <p><strong>Region: </strong>{region}</p>
            <p><strong>Capital: </strong>{capital}</p>
            </div>
        </div>
    )
}