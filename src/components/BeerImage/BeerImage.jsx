import React from 'react'
import './BeerImage.scss'

const BeerImage = ({buttonFunc, name, image_url, tagline, alc}) => {
  return (
    <article className='beer-card'>
        <h2 className='beer-card__heading'>{name}</h2>
        <img src={image_url} alt={name} className="beer-card__image"/>
        <h3>ABV - {alc}%</h3>
        <h4>{tagline}</h4>
        <button onClick={buttonFunc}>Click here for more details</button>
    </article>
  )
}

export default BeerImage