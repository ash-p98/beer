import React, { useState } from "react";
import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import BeerImageList from "./containers/BeerImageList/BeerImageList";
import beerArr from "./data/data";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BeerCard from "./components/BeerCard/BeerCard";

const App = () => {
  const [beers, setBeers] = useState(beerArr);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBeer = beerArr.filter((beer) => {
    return beer.name.toLowerCase().startsWith(searchTerm);
  });
  console.log(filteredBeer);

  const searchTermChangeHandler = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchTerm(text);
  };

  return (
    <Router>
      <div className="">
        <NavBar
          searchTerm={searchTerm}
          searchTermChangeHandler={searchTermChangeHandler}
          searchResultCount={beers.length}
        />
        <BeerImageList beerArr={beerArr} />

        <Routes>
          {" "}
          <Route
            path="/"
            element={<BeerImageList beerArr={beers} />}
          ></Route>{" "}
          <Route
            path="/beers/:name"
            element={<BeerCard beerArr={beers} />}
          ></Route>{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
