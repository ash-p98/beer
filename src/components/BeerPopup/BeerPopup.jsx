import React from 'react'
import "./BeerPopup.scss";

const BeerPopup = ({handleClose, popName, popImage, popDescription, popAlc, popFirstBrewed }) => {

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <h1>{popName}</h1>
        <img src={popImage} alt="beerImage"/>
        <h3>{popAlc}</h3>
        <h4>{popFirstBrewed}</h4>
        <p>{popDescription}</p>
      </div>
    </div>
  )
}

export default BeerPopup