import React from "react";
import BeerImage from "../../components/BeerImage/BeerImage";
import "./BeerImageList.scss";

const BeerImageList = ({beerArr}) => {

  const beerImagesJSX = beerArr.map((theBeer) => {
    return (
        <BeerImage
          id={theBeer.id}
          name={theBeer.name}
          image_url={theBeer.image_url}
          alc={theBeer.abv}
          tagline={theBeer.tagline}
        />
    );
  });

  return <div className="beer-image-container">{beerImagesJSX}</div>;
};

export default BeerImageList;
