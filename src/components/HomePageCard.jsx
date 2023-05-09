import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useEffect, useState } from 'react';
import MapCard from './MapCard';
import SellingInputForm from './SellingInputForm';
import SellingCard from './SellingCard';


function HomePageCard(){

  //screen determines which type of home page screen will be shown
  const[screen, setScreen]=useState();

    const submit = () => {
        confirmAlert({
          title: 'Dobrodošli!',
          message: 'Molimo Vas izaberite da li želite da kupite ili prodate nekretninu.',
          buttons: [
            {
              label: 'Kupujem',
              onClick: () => {
                setScreen(0);
              }
            },
            {
              label: 'Prodajem',
              onClick: () => {
                setScreen(1);
              }            
            }
          ]
        });
    };



    useEffect(()=>{
        submit();
    },[])

    return(
      <div>
      {screen===1 ?
        <div className='background'>
          <SellingCard/>
        </div> :null
      }
      </div>
    )
}
export default HomePageCard;
