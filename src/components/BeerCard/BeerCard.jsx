import React from "react";
import {useParams } from "react-router-dom";

const BeerCard = ({ beerArr }) => {
  const { name } = useParams();

  const theBeer = beerArr.find((beers) => {
    return beers.name === name;
  });

  const generateImage = (beer) => {
      return(
          <img 
          src={beer.image_url} 
          alt={beer.name} 
          className="card__image"/>
      );
  };

  const generateCardContent = (beer) => {
      const heading = <h2 className="card__heading">{beer.name}</h2>
      const tag = <h3>{beer.tagline}</h3>
      const brewed = <h3>{beer.first_brewed}</h3>
      const description = <p className="card__text">{beer.description}</p>
      const abvContent = <h3>{beer.abv}</h3>

      return(
          <div className="card__content">
              {heading}
              {tag}
              {brewed}
              {description}
              {abvContent}
          </div>
      );
  };

  return( 
  <>
      <article>
          {generateImage(theBeer)} {generateCardContent(theBeer)}
          <div></div>
      </article>
      
          <button>Back</button>
      
  </>
  );
};

export default BeerCard;
