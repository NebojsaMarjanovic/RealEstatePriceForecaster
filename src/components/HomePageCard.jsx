import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useEffect, useState } from 'react';
import MapCard from './MapCard';
import SellingInputForm from './SellingInputForm';
import SellingCard from './SellingCard';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';


function HomePageCard() {

  //screen determines which type of home page screen will be shown
  const [screen, setScreen] = useState();

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



  useEffect(() => {
    submit();
  }, [])

  return (
    <div>
      {screen === 1 ?
        <div className='background'>
          <SellingCard />
        </div> :
        <div>
          <iframe title="proba" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=25c1f911-75bd-4fc3-a42b-9a08d4d806ad&autoAuth=true&ctid=4bd7928d-756a-4396-8d8f-803e40dd52db" frameborder="0" allowFullScreen="true"></iframe>         {/* <PowerBIEmbed
            embedConfig={{
              type: 'report',   // Supported types: report, dashboard, tile, visual, qna and paginated report
              // id: '25c1f911-75bd-4fc3-a42b-9a08d4d806ad',
              embedUrl: '<https://app.powerbi.com/reportEmbed?reportId=25c1f911-75bd-4fc3-a42b-9a08d4d806ad&autoAuth=true&ctid=4bd7928d-756a-4396-8d8f-803e40dd52db>',
              accessToken: undefined,    // Keep as empty string, null or undefined
              tokenType: models.TokenType.Embed
            }}
          /> */}
        </div>
      }
    </div>
  )
}
export default HomePageCard;
