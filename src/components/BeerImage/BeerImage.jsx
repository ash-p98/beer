import React from 'react'
import {Link} from 'react-router-dom';
import './BeerImage.scss'


const BeerImage = ({name, image_url}) => {
  return (
    <article className='poke-image-card'>
        <Link to={"/beers/" + name}>
        <h2 className='card__heading'>{name}</h2>
        </Link>
        <img src={image_url} alt={name} className="card__image"/>
    </article>
  )
}

export default BeerImage