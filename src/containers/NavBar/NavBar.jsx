import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterBox from "../FilterBox/FilterBox";
import "./NavBar.scss";

const NavBar = ({ searchTerm, 
  searchTermChangeHandler, 
  searchResultCount,
  isABV,
  handleABV,
  isClassic,
  handleClassic,
  isAcid,
  handleAcid,

}) => {
  return (
    <div className="navbar">
      <SearchBox
        searchTerm={searchTerm}
        searchTermChangeHandler={searchTermChangeHandler}
      />
      <h1>BREWDOG BEERS</h1>
      <FilterBox 
      isABV = {isABV}
      handleABV = {handleABV}
      isClassic ={isClassic}
      handleClassic = {handleClassic}
      isAcid = {isAcid}
      handleAcid = {handleAcid}
      searchResultCount = {searchResultCount}
      />
    </div>
  );
};

export default NavBar;
