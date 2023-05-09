import React, { useState,useEffect } from "react"
import "react-widgets/styles.css"; 
import Combobox from "react-widgets/Combobox";
import axios from 'axios';


function SellingInputForm(props){

    const location = props.location
    const[neighborhood, setNeighborhood]=useState([]);
    const[municipality, setMunicipality] = useState();
    const roomCount=['1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'];
    const heatingType=["Etažno", "Centralno", "Struja", "Gas"] //treba da se napravi mapa na backendu
    const [price, setPrice] = useState(0);


    const [realEstateData, setRealEstateData] = useState({
        location:'',
        quadrature:'',
        roomCount:'',
        heatingType:'',
        elevator:''
    });

    function handleInput(e){
        let inputData = realEstateData;
        inputData[e.target.name]=e.target.value;
        setRealEstateData(inputData);
    }

    function handleSelect(key,value){
        let inputData = realEstateData;
        key=value;
        setRealEstateData(inputData);
    }

    const fetchData = async () => {
        let res = await axios.get('https://localhost:7149/api/Mapper/'+location);
        setMunicipality(res.data.location);
        setNeighborhood(res.data.neighborhoods);
        console.log(res.data)
    }

    function calculatePrice (e){
        console.log(realEstateData)
		e.preventDefault();
        axios.post('https://localhost:7149/api/Price', realEstateData)
            .then((res)=>{
                console.log(res.data.price);
                setPrice(res.data.price);
            });
    }
    
    useEffect(() => {
        console.log("Loading")
        if(props.location)
        fetchData();
    },[props.location]);


   

    return(
        <div>
            <form>
                <h2>Unesite podatke o nekretnini</h2>
                <div>
                <label>Opština</label>
                    <input
                        type="text"
                        placeholder="Opština"
                        name="opstina"
                        disabled='true'
                        value={municipality}
                        className="inputForm"
                        required = 'true'
                    ></input>
                </div>
                <div>
                    <label>Naselje</label>
                    <Combobox
                        defaultValue=""
                        data={neighborhood}
                        onChange={(value)=> realEstateData.location=value}
                        placeholder="Izaberite naselje"
                        style={{marginBottom:20}}
                        aria-required = 'true'
                    />
                </div>
                <div>
                    <label>Kvadratura</label>
                    <input
                        type="text"
                        placeholder="m2"
                        name="quadrature"
                        onInput={handleInput}
                        className="inputForm"
                        required = 'true'
                    ></input>
                </div>
                <div>
                    <label>Broj soba</label>
                    <Combobox
                        defaultValue=""
                        data={roomCount}
                        placeholder="Izaberite broj soba"
                        onChange={value=>realEstateData.roomCount=value}
                        style={{marginBottom:20}}
                        aria-required = 'true'
                    />
                </div>
                <div>
                    <label>Grejanje</label>
                    <Combobox
                        defaultValue=""
                        data={heatingType}
                        placeholder="Izaberite tip grejanja"
                        onChange={value=>realEstateData.heatingType=value}
                        style={{marginBottom:20}}
                        aria-required = 'true'
                    />
                </div>
                <div>
                    <label>Broj liftova u zgradi</label>
                    <input
                        type="text"
                        name="elevator"
                        onInput={handleInput}
                        className="inputForm"
                        required = 'true'
                    ></input>
                </div>
                <div>
                    <button onClick={calculatePrice} className="btnCalculate">
                        Izračunaj cenu
                    </button>
                </div>
                <div>
                    <h3>{price!==0 ? price : null}</h3>
                </div>
            </form>
        </div>
    )

}

export default SellingInputForm;