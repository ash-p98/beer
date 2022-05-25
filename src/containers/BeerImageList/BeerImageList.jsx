import React, { useEffect, useState } from "react";
import BeerCard from "../../components/BeerCard/BeerCard";
import BeerImage from "../../components/BeerImage/BeerImage";
import "./BeerImageList.scss";

const BeerImageList = () => {
  const [beerArr, setBeerArr] = useState([]);
  const [userRange] = useState(25);

  useEffect(() => {
    console.log("in UseEffect");
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((response) => response.json())
      .then((userObjects) => {
        console.log(userObjects);
        setBeerArr(userObjects);
      });
  }, [userRange]);

  console.log("after fetch");
  const beerImagesJSX = beerArr.map((theBeer) => {
    return (
      <>
        <BeerImage
          id={theBeer.id}
          name={theBeer.name}
          image_url={theBeer.image_url}
          description={theBeer.description}
        />
      </>
    );
  });

  return <div className="poke-image-container">{beerImagesJSX}</div>;
};

export default BeerImageList;
