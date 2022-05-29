import { useEffect, useState } from "react";
import React from "react";
import BeerImageList from "../BeerImageList/BeerImageList";
import NavBar from "../NavBar/NavBar";
import BeerPopup from "../../components/BeerPopup/BeerPopup";

const Main = () => {
  const [beerArr, setBeerArr] = useState([]);
  const [popBeerArr, setPopBeerArr] = useState([]);
  const [checkBeer, setCheckBeer] = useState([]);
  const [search, setSearch] = useState("");
  const [abv, setabv] = useState(false);
  const [classic, setClassic] = useState(false);
  const [acid, setAcid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("in UseEffect");
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((response) => response.json())
      .then((userObjects) => {
        console.log(userObjects);
        setBeerArr(userObjects);
        setPopBeerArr(userObjects);
      });
  }, []);

  console.log("after fetch");

//   //Serach box stuff
//   const filteredBeers = beerArr.filter((userObjects) => {
//     const beerName = userObjects.name.toLowerCase();
//     return beerName.includes(search);
//   });

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearch(input);
    console.log(input);
  };

  //checkbox stuff
  const handleABVbox = () => {
    setabv(!abv);
  };
  const handeClassicbox = () => {
    setClassic(!classic);
  };
  const handleAcidbox = () => {
    setAcid(acid);
  };

  const highABV = checkBeer.filter((aBeer) => {
    return aBeer.abv > 6;
  });
  const isClassicBeer = checkBeer.filter((aBeer) => {
    const brewDate = aBeer.first_brewed.split("/")[1];
    return brewDate < 2010;
  });
  const acidBeers = checkBeer.filter((aBeer) => {
    return beerArr.ph < 4;
  });

//   useEffect(() => {
//     if (abv === true && classic === false && acid === false) {
//       setBeerArr(highABV);
//     } else if (abv === false && classic === true && acid === false) {
//       setBeerArr(isClassicBeer);
//     }
//   });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavBar
        search={search}
        handleInput={handleInput}
        abv={abv}
        handleABVbox={handleABVbox}
      />
      <BeerImageList beerArr={beerArr} buttonProp={togglePopup} />
      {isOpen && <BeerPopup popBeerArr={popBeerArr} handleClose={togglePopup} />}
    </div>
  );
};

export default Main;
