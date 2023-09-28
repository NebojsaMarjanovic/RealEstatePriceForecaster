import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import axios from 'axios';
import Combobox from "react-widgets/Combobox";
import 'chartjs-plugin-zoom';
import { Tooltip } from 'react-tooltip';
import {AiOutlineInfoCircle} from 'react-icons/ai';

function ForecastCard() {
  const[neighborhood, setNeighborhood]=useState({
      '0':'Barajevo', 
      '1':'Čukarica', 
      '2':'Grocka', 
      '3':'Lazarevac',
      '4':'Mladenovac',
      '5':'Novi Beograd',
      '6':'Obrenovac',
      '7':'Palilula',
      '8':'Rakovica',
      '9':'Savski venac',
      '10':'Sopot',
      '11':'Stari grad',
      '12':'Surčin',
      '13':'Voždovac',
      '14':'Vračar',
      '15':'Zemun',
      '16':'Zvezdara'
});
  const roomCount=['0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'];
  const[historicalPrices, setHistoricalPrices]=useState([]);
  const [forecast, setForecast] = useState([]);
  const [lowerBoundForecast, setLowerBoundForecast] = useState([]);
  const [upperBoundForecast, setUpperBoundForecast] = useState([]);
  const [flag,setFlag] = useState(false);
  const [forecastChartData, setForecastChartData] = useState({});
  const [upperBoundChartData, setUpperBoundChartData] = useState({});
  const [lowerBoundChartData, setLowerBoundChartData] = useState({});
  const [showChart, setShowChart] = useState(false);
  const [isCheckedHistoricalData, setIsCheckedHistoricalData] = useState(false);

  const [realEstateData, setRealEstateData] = useState({
      location:-1,
      roomCount:0,
  });
  
  function forecastPrice (e){
      // console.log(realEstateData)
      e.preventDefault();
      console.log(realEstateData);
       let res = axios.post('https://localhost:44338/api/PriceAnalyser/forecast', realEstateData)
          .then((res)=>{
            console.log(res.data)
              setHistoricalPrices(res.data.historicalData);
              setForecast(res.data.forecast);
              setUpperBoundForecast(res.data.upperBoundForecast);
              setLowerBoundForecast(res.data.lowerBoundForecast);
              setShowChart(true);
              setFlag(!flag);
          })
          .catch((error)=>{
            setShowChart(false);
            console.log(error)
            window.alert(error.response.data);
          })
  }

  useEffect(() => {
    isCheckedHistoricalData? setForecastChartData({...historicalPrices,...forecast}) : setForecastChartData(forecast);
    // setChartData({...historicalPrices, ...forecast});
    setLowerBoundChartData(lowerBoundForecast);
    setUpperBoundChartData(upperBoundForecast);
  }, [flag, isCheckedHistoricalData]);

  const handleChangeHistoricalData= () =>{
    setIsCheckedHistoricalData(!isCheckedHistoricalData)
    console.log(forecastChartData)

  }

  var data = {
  labels: Object.entries(forecastChartData).map(([key,value]) => key),
  datasets: [
    {
      label: "Prosečna cena nekretnina",
      data: Object.entries(forecastChartData).map((value) => value),
      backgroundColor: [
        "rgba(75,192,192,1)",
        // "#ecf0f1",
        // "#50AF95",
        // "#f3ba2f",
        // "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    {
      label: "Gornja granica",
      data: Object.entries(upperBoundChartData).map((value) => value),
      backgroundColor: [
        // "rgba(75,192,192,1)",
        // "#ecf0f1",
        // "#50AF95",
        // "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "green",
      borderWidth: 2,
      fill:'-1'
      
    },
    {
      label: "Donja granica",
      data: Object.entries(lowerBoundChartData).map((value) => value),
      backgroundColor: [
        // "rgba(75,192,192,1)",
        // "#ecf0f1",
        // "#50AF95",
        // "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "red",
      borderWidth: 2,
      fill:'1'
    },
  ],
}

var options = {
  // maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        callback: function(val, index) {
          // Hide every 2nd tick label
          return isCheckedHistoricalData? (index % 4 === 0 ? this.getLabelForValue(val) : '') : this.getLabelForValue(val);
        }
      },
    },
    y:{
      title:{
        display:true,
        text:'Prosečna cena po m2',
        minRotation:90
        }
    }
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },
  plugins: {
    zoom: {
      zoom: {
        wheel: {
          enabled: true // SET SCROOL ZOOM TO TRUE
        },
        mode: "x",
        speed: 1
      },
      pan: {
        enabled: true,
        mode: "x",
        speed: 1
      }
    }
  }
}


return (
  <div className="forecastContainer">
      <form className="inputForm">
    <h3 data-tooltip-id="my-tooltip-1">📈 Unesite podatke o nekretninama za koje želite da se predikcija izvrši <AiOutlineInfoCircle/></h3>

      <div>
                  <label><b>Opština</b></label>
                  <Combobox
                      defaultValue=""
                      data={Object.values(neighborhood)}
                      onChange={(value)=> realEstateData.location=Object.keys(neighborhood).find(key=>neighborhood[key]===value)}
                      placeholder="Izaberite opštinu"
                      style={{marginBottom:20}}
                      aria-required = 'true'
                      required = 'true'

                  />
              </div>
              <div>
                  <label><b>Broj soba</b></label>
                  <Combobox
                      defaultValue=""
                      data={roomCount}
                      placeholder="Izaberite broj soba"
                      onChange={value=>realEstateData.roomCount=value}
                      style={{marginBottom:20}}
                      aria-required = 'true'
                      required = 'true'

                  />
              </div>
              <div className='checkbox-wrapper'>
              <input id="checkHistoricalData" type="checkbox" className={isCheckedHistoricalData ? "checkedHistoricalData":""} checked={isCheckedHistoricalData} onChange={handleChangeHistoricalData}></input>
              <label htmlFor='checkedDomacin' ><b>Prikaži kretanje cena prethodnih godina</b></label>
              </div>
              <div>
              <button onClick={forecastPrice} className="btnForecast">
                      <b>Predvidi cenu</b>
                </button>
                </div>
      </form>
      {showChart ?
    <div className="graph">
      <LineChart chartData={data} options={options} width={"100%"} height={"100%"} />

  </div>:null
  }

<Tooltip
        id="my-tooltip-1"
        place="bottom"
      >
       Prilikom generisanja predviđenih cena korišćeni su istorijski podaci prosečnih cena po kvadratnom metru 
      nekretnina sa karakteristikama koje ste uneli, dobijeni sa sajta <i>Halo oglasi</i>. 
      Za detaljnije informacije o podacima i procesu procenjivanja nekretnina posetite stranicu <i>O servisu</i>.
        </Tooltip>
  </div>
);
}

export default ForecastCard;

