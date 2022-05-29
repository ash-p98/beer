import React from 'react'

const Filter = ({checkbox, handleCheckbox, condition, name}) => {
  return (
    <div>
      <label htmlFor={condition}>{name}</label>
      <input id={condition} type="checkbox" 
        checked={checkbox}
        onChange={handleCheckbox}
        className="filter-item"
      />
    </div>
  )
}

export default Filter