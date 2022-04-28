import React from "react";
import './SearchBox.scss'

const SearchBox = ({
  searchTerm,
  searchTermChangeHandler,
  searchResultsCount,
}) => {

    let searchResultText = `Found ${searchResultsCount} beers`

  return (
  <div className="search-box">
      <label htmlFor="searchBox">ByName:</label>
      <input 
      type="text" 
      id="searchBox"
      className="search-box__name-search"
      placeholder="Name to search"
      onChange={searchTermChangeHandler}
      value={searchTerm}
      />
      <p className="search-bar__results">{searchResultText}</p>
  </div>
  );
};

export default SearchBox;
