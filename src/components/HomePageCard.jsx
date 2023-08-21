import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useEffect, useState } from 'react';
import ForecastCard from './ForecastCard';
import CalculationCard from './CalculationCard';
import { useNavigate } from "react-router-dom";


function HomePageCard() {

  //screen determines which type of home page screen will be shown
  const [screen, setScreen] = useState();

  const navigate = useNavigate();

  const submit = () => {
    confirmAlert({
      title: 'Dobrodošli!',
      message: 'Molimo Vas izaberite da li želite da predvidite cenu nekretnina ili procenite nekretninu.',
      buttons: [
        {
          label: 'Predvidi cenu',
          onClick: () => {
            navigate("/predvidiCenu")
          }
        },
        {
          label: 'Proceni nekretninu',
          onClick: () => {
            navigate("/proceniNekretninu")
          }
        }
      ]
    });
  };



  useEffect(() => {
    submit();
  }, [])

  return (
    <></>
  )
}
export default HomePageCard;
