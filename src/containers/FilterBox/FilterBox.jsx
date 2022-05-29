import React from "react";
import Filter from "../../components/Filter/Filter";

const FilterBox = ({
  abv6,
  handleABV6,
  classic,
  handleClassic,
  acid,
  handleAcid,
}) => {

  return (
  <div>
      <Filter 
      checkbox={abv6}
      handleCheckbox={handleABV6}
      name = "Strong Beers (ABV > 6%)"
      />
      <Filter
      checkbox={classic}
      handleCheckbox={handleClassic}
      name = "Classic Beers"
      />
      <Filter 
      checkbox={acid}
      handleCheckbox = {handleAcid}
      name = "Acidic Beers (ph < 4)"
      />
  </div>
  )
};

export default FilterBox;
