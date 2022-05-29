import React from 'react'
import "./BeerPopup.scss";

const BeerPopup = ({handleClose, content}) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <h1>testing</h1>
      </div>
    </div>
  )
}

export default BeerPopup