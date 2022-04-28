import React, {useEffect, useState} from 'react'
import BeerImage from '../../components/BeerImage/BeerImage';
import './BeerImageList.scss'

const BeerImageList = () => {
    const[beerArr, setBeerArr] = useState([]);
    const [userRange, setUserRange] = useState(25);
    

    useEffect(()=> {
        console.log("in UseEffect");
        fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((userObjects)=>{
            console.log(userObjects);
            setBeerArr(userObjects);
        });
    },[userRange])

    console.log("after fetch");
    const beerImagesJSX = beerArr.map((theBeer) =>{
        return <BeerImage key={"beer" + theBeer.id} name={theBeer.name} image_url={theBeer.image_url}/>
    })
    
  return (
    <div className='poke-image-container'>{beerImagesJSX}</div>
  )
}

export default BeerImageList