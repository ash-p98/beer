import React from 'react'
import './BeerImage.scss'


const BeerImage = ({id, name, image_url, tagline, alc}) => {
  return (
    <article className='beer-card'>
        <h2 className='beer-card__heading'>{name}</h2>
        <img src={image_url} alt={name} className="beer-card__image"/>
        <h3>ABV - {alc}%</h3>
        <h4>{tagline}</h4>
        <p>Click card for more details</p>
    </article>
  )
}

export default BeerImage