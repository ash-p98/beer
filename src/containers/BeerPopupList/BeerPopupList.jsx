import React from 'react'
import BeerPopup from '../../components/BeerPopup/BeerPopup';

const BeerPopupList = ({popBeerArr}) => {

    const beerPopJSX = popBeerArr.map((popTheBeer) => {
        return (
            <BeerPopup 
            popName={popTheBeer.name}
            popImage={popTheBeer.image_url}
            popDescription={popTheBeer.description}
            popFirstBrewed={popTheBeer.first_brewed}
            popAlc={popTheBeer.abv}
            />
          )
    });
    return <div className='popup-beer-container'>{beerPopJSX}</div>
}

export default BeerPopupList