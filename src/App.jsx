import React, { useState } from "react";
import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import BeerImageList from "./containers/BeerImageList/BeerImageList";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BeerCard from "./components/BeerCard/BeerCard";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // const filteredBeer = beerArr.filter((beer) => {
  //   return beer.name.toLowerCase().startsWith(searchTerm);
  // });
  // console.log(filteredBeer);

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
        />
        <Routes>
          {" "}
          <Route
            path="/"
            element={<BeerImageList/>}
          ></Route>{" "}
          <Route
            path="/beers/:id"
            element={<BeerCard/>}
          ></Route>{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
