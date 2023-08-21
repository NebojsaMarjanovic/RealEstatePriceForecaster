import React, { useState,useEffect } from "react"
import "react-widgets/styles.css"; 
import Combobox from "react-widgets/Combobox";
import axios from 'axios';


function PriceCalculatorCard(props){

    const location = props.location
    const[municipality, setMunicipality] = useState('');
    const[neighborhood,setNeighborhood] = useState('');
    const[quadrature,setQuadrature]=useState('');
    const[roomCount,setRoomCount]=useState('');
    const[floor, setFloor]=useState('');
    const[heatingType,setHeatingType]=useState('');
    const[hasElevator, setHasElevator]=useState(false);
    const[registeredStatus, setRegisteredStatus]=useState(false);
    const[isLastFloor, setIsLastFloor]=useState(false);

    const[neighborhoodData, setNeighborhoodData]=useState([]);
    const roomCountEnum=['1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'];
    const heatingTypeEnum=["Etažno", "Centralno", "Struja", "Gas", "TA peć", "Klima", "Podno", "Norveški radijatori", "Kamin", "Mermerni radijator", "Toplotna pumpa","Ostalo"] 

    const [price, setPrice] = useState(0);

    const fetchData = async () => {
        let res = await axios.get('https://localhost:44338/api/Mapper/'+location);
        setMunicipality(res.data.location.item1);
        setNeighborhoodData(res.data.neighborhoods);
        console.log(res.data)
    }

    function calculatePrice (e){
        console.log({
            municipality:municipality,
            neighborhood:neighborhood,
            quadrature:quadrature,
            roomCount:roomCount,
            floor:floor,
            isLastFloor:isLastFloor,
            heatingType:heatingType,
            hasElevator,hasElevator,
            registeredStatus:registeredStatus
        });
		e.preventDefault();
        axios.post('https://localhost:44338/api/PriceAnalyser/calculate',{
            municipality:municipality,
            neighborhood:neighborhood,
            quadrature:quadrature,
            roomCount:roomCount,
            floor:floor,
            isLastFloor:isLastFloor,
            heatingType:heatingType,
            hasElevator,hasElevator,
            registeredStatus:registeredStatus
        })
            .then((res)=>{
                console.log(res.data);
                setPrice(res.data);
            });
    }
    
    useEffect(() => {
        console.log("Loading")
        console.log(props.location)
        if(props.location!==undefined){
            setMunicipality('');
            setNeighborhood('');
            setQuadrature('');
            setRoomCount('');
            setFloor('');
            setIsLastFloor(false);
            setHeatingType('');
            setHasElevator(false);
            setRegisteredStatus(false);
            fetchData();
        }
        // else console.log("wtf"+props.location)
    },[props.location]);


   

    return(
        <div>
            <form>
                <h2>Unesite podatke o nekretnini</h2>
                <div>
                <label><b>Opština</b></label>
                    <input
                        type="text"
                        placeholder="Opština"
                        name="municipality"
                        disabled='true'
                        value={municipality}
                        className="inputField"
                        required = 'true'
                    ></input>
                </div>
                <div>
                <div>
                    <label><b>Naselje</b></label>
                    <Combobox
                        defaultValue=""
                        data={neighborhoodData}
                        placeholder="Izaberite naselje"
                        style={{ marginBottom: 20 }}
                        aria-required='true'
                        value={neighborhood} 
                        onChange={(value) => setNeighborhood(value)}
                        />
                </div>
                <div>
                    <label><b>Kvadratura</b></label>
                    <input
                        type="text"
                        placeholder="m2"
                        name="quadrature"
                        onInput={event=>setQuadrature(event.target.value)}
                        className="inputField"
                        required = 'true'
                        value={quadrature}
                    ></input>
                </div>
                <div>
                    <label><b>Broj soba</b></label>
                    <Combobox
                        defaultValue=""
                        data={roomCountEnum}
                        placeholder="Izaberite broj soba"
                        onChange={(value) => setRoomCount(value)}
                        style={{marginBottom:20}}
                        value={roomCount}
                        aria-required = 'true'
                    />
                </div>
                <div>
                    <label><b>Sprat</b></label>
                    <input
                        type="text"
                        name="floor"
                        onInput={(event)=>setFloor(event.target.value)}
                        className="inputField"
                        required = 'true'
                        value={floor}
                        // value={realEstateData.floor}
                    ></input>
                </div>
                <div className='checkbox-container'>
                <div className="checkbox-wrapper">
                        <input id="checkHistoricalData" type="checkbox" className={isLastFloor ? "checkedHistoricalData":""} checked={isLastFloor} onChange={()=>{setIsLastFloor(!isLastFloor);}}></input>
                        <label htmlFor='checkLastFloor'><b>Stan na poslednjem spratu</b></label>
                </div>
                </div>
                <div>
                    <label><b>Grejanje</b></label>
                    <Combobox
                        defaultValue=""
                        data={heatingTypeEnum}
                        placeholder="Izaberite tip grejanja"
                        onChange={(value) =>setHeatingType(value)}
                        value={heatingType}
                        style={{marginBottom:20}}
                        aria-required = 'true'
                    />
                </div>
                <div className='checkbox-container'>
                    <div className="checkbox-wrapper">
                        <input id="checkHistoricalData" type="checkbox" className={hasElevator ? "checkedHistoricalData":""} checked={hasElevator} onChange={()=>{setHasElevator(!hasElevator);}}></input>
                        <label htmlFor='checkedElevator'><b>Zgrada sa liftom</b></label>
                    </div>
                    <div className="checkbox-wrapper">
                        <input id="checkHistoricalData" type="checkbox" className={registeredStatus ? "checkedHistoricalData":""} checked={registeredStatus} onChange={()=>{setRegisteredStatus(!registeredStatus);}}></input>
                        <label htmlFor='checkedRegistered'><b>Uknjižen stan</b></label>
                    </div>
              </div>
                <div>
                    <button onClick={calculatePrice} className="btnCalculate">
                        <b>Izračunaj cenu</b>
                    </button>
                </div>
                <div>
                    <h3>{price!==0 ? <>Procenjena cena nekretnine je {price}€.</> : null}</h3>
                </div>
                </div>
            </form>
        </div>
    )

}

export default PriceCalculatorCard;