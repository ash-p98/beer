import React from "react";
import './SearchBox.scss'

const SearchBox = ({
  searchTerm,
  searchTermChangeHandler,
  searchResultsCount,
}) => {


  return (
  <form className="search-box">
      <label htmlFor="searchBox"></label>
      <input 
      type="text" 
      id="searchBox"
      className="search-box__name-search"
      placeholder="Search"
      onChange={searchTermChangeHandler}
      value={searchTerm}
      />
  </form>
  );
};

export default SearchBox;
