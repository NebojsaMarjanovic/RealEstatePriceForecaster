import { useState } from 'react';
import MapCard from './MapCard';
import PriceCalculatorCard from './PriceCalculatorCard';


function CalculationCard(){

    const[location, setLocation]=useState();

    const handleLocationChange = (newValue) =>{
        setLocation(newValue);
        console.log(newValue);
    };

    return(
        <div className='sellingContainer'>
            <PriceCalculatorCard location={location}/>
            <MapCard onChange={handleLocationChange}/>
        </div>
    )
}

export default CalculationCard;