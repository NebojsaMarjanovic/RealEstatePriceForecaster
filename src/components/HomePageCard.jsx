import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useEffect } from 'react';
import MapCard from './MapCard';


function HomePageCard(){


    const submit = () => {
        confirmAlert({
          title: 'Dobrodošli!',
          message: 'Molimo Vas izaberite da li želite da kupite ili prodate nekretninu.',
          buttons: [
            {
              label: 'Kupujem',
              onClick: () => {
                console.log("Kupujem")
              }
            },
            {
              label: 'Prodajem',
              onClick: () => {
                console.log("Prodajem")
              }            
            }
          ]
        });
    };



    useEffect(()=>{
        submit();
    },[])

    return(
        <div className='background'>
            <MapCard></MapCard>
        </div>
    )
}
export default HomePageCard;
