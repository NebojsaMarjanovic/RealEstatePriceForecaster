import { useState } from 'react';
import MapCard from './MapCard';
import SellingInputForm from './SellingInputForm';


function SellingCard(){

    const[location, setLocation]=useState();

    const handleLocationChange = (newValue) =>{
        setLocation(newValue);
        console.log(newValue);
    };


    return(
        <div className='sellingContainer'>
            <SellingInputForm location={location}/>
            <MapCard onChange={handleLocationChange}/>
        </div>
    )
}

export default SellingCard;