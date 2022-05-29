import React from "react";
import BeerImage from "../../components/BeerImage/BeerImage";
import "./BeerImageList.scss";

const BeerImageList = ({beerArr, buttonProp}) => {

  const beerImagesJSX = beerArr?.map((theBeer) => {
    return (
      <>
        <BeerImage
          name={theBeer.name}
          image_url={theBeer.image_url}
          alc={theBeer.abv}
          tagline={theBeer.tagline}
          buttonFunc = {buttonProp}
        />
        </>
    );
  });

  return <div className="beer-image-container">{beerImagesJSX}</div>;
};

export default BeerImageList;
