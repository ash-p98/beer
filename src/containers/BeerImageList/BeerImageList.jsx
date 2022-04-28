import React, {useEffect, useState} from 'react'
import BeerImage from '../../components/BeerImage/BeerImage';
import './BeerImageList.scss'

const BeerImageList = ({beerArr}) => {
    const[userArr, setUserArr] = useState([]);
    const [userRange, setUserRange] = useState(25);
    

    useEffect(()=> {
        console.log("in UseEffect");
        fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((userObjects)=>{
            console.log(userObjects);
            setUserArr(userObjects.results);
        });
    },[userRange])

    console.log("after fetch");
    const beerImagesJSX = beerArr.map((beer) =>{
        return <BeerImage key={"beer" + beer.id} name={beer.name} image_url={beer.image_url}/>
    })
    
  return (
    <div className='poke-image-container'>{beerImagesJSX}</div>
  )
}

export default BeerImageList