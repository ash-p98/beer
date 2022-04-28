import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import "./NavBar.scss"

const NavBar = ({searchTerm, searchTermChangeHandler, searchResultCount}) => {
  return (
    <div className='navbar'>
        <h1 className='navbar__header'>Here are the Beers!</h1>
        <SearchBox 
        searchTerm={searchTerm}
        searchTermChangeHandler={searchTermChangeHandler}
        searchResultCount={searchResultCount}
        />
    </div>
  )
}

export default NavBar