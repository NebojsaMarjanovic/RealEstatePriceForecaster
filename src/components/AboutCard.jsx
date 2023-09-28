import { Link } from 'react-router-dom';



function AboutCard(){

    return(
        <div className='aboutContainer'>
            <h2>Dobrodosli na REPF - besplatan servis za pomoć pri donošenju odluka 
                prilikom kupovine i prodaje nekretnina!</h2>
                <p>
                    Tržište nekretnina je kompleksno, dinamično i podložno promenama te je 
                    pravilno procenjivanje i predviđanje cena pravi izazov za mnoge učesnike na njemu.
                    REPF (Real Estate Price Forecaster) servis predstavlja tehnološku inovaciju 
                    implementiranu za potrebe automatizovanog i objektivnog generisanja preciznih predikcija
                    i procena, uz korišćenje adekvatnih podataka pomoću savremenih 
                    informaciono-komunikacionih tehnologija.
                </p>
                <div className='paragraphContainer'>
                <h3>Predviđanje cena</h3>
                <p>
                    Ukoliko želite da predvidite buduće kretanje cena nekretnina to
                    možete izvršiti na stranici <i><Link to='/predvidiCenu'>Predvidite cenu</Link></i>. 
                    Potrebno je da unesete podatke o lokaciji nekretnine kao i broju soba.
                    Servis će Vam prikazati grafik na kome se mogu videti predviđene cene nekretnina,
                    uključujući gornju i donju granicu predikcije. 
                </p>
                <img src="./forecast1.PNG" className='aboutSlika'/>
                <p>
                Takođe, ukoliko želite da vidite prethodno
                    kretanje cene nekretnina na unetoj lokaciji sa brojem soba koje ste definisali u upitu 
                    potrebno je da čekirate opciju <i>Prikaži kretanje cena prethodnih godina</i>.
                    Servis će Vam prikazati grafik na kome se može videti kretanje cena u prethodnom periodu
                    zajedno sa predviđenim cenama.
                </p>
                <img src="./forecast2.PNG" className='aboutSlika'/>
                </div>

                <div className='paragraphContainer'>
                <h3>Procenjivanje cena</h3>

                <p>
                    Ukoliko hoćete da procenite cenu nekretnine na osnovu njenih karakteristika to
                    možete izvršiti na stranici <i><Link to='/proceniNekretninu'>Procenite nekretninu</Link></i>. 
                    Prvi korak je izbor odgovarajuće beogradske opštine nakon čega se bira naselje. 
                    Potom se unose podaci o nekretnini. Klikom na dugme <i>Izračunaj cenu</i> sistem 
                    generiše kalkulisanu cenu na osnovu unetih nekretnina korišćenjem modela mašinskog učenja.
                </p>
                <img src="./calculation1.PNG" className='aboutSlika'/>
                </div>
                <div className='paragraphContainer'>
                    <h3>Korišćeni podaci</h3>
                    <p>
                        Za potrebe razvoja funkcionalnosti predviđanja budućeg kretanja cena nekretnina 
                        korišćeni su istorijski podaci o kretanju cena nekretnina prikupljeni sa sajta 
                        <Link to='https://www.halooglasi.com/nekretnine'><i> Halo oglasi</i></Link>.
            <br/>
            <br/>
                        Prilikom implementacije funkcionalnosti procene cena nekretnina korišćeni su podaci 
                        o trenutno raspoloživim nekretninama koje se prodaju. U tu svrhu prikupljeni su oglasi 
                        prodaja nekretnina sa sajtova oglašivača 
                        <ul>
                            <li><Link to='https://www.halooglasi.com/nekretnine'><i>Halo oglasi</i></Link></li>
                            <li><Link to='https://www.4zida.rs/'><i>4zida</i></Link></li>
                            <li><Link to='https://www.nekretnine.rs/'><i>Nekretnine.rs</i></Link>.</li>
                        </ul>
                        <br/>
                        Prikupleni podaci ažuriraju se na kraju svakog meseca upotrebom automatizovanog alata 
                        kojim se obavlja prikupljanje, obrada i čuvanje podataka u bazu podataka REPF servisa.
                    </p>
                </div>
                <div className='paragraphContainer'>
                <h3>Način izvršavanja</h3>
                <p>
                    Nakon Vašeg pristiglog zahteva sistem izvršava odgovarajući model mašinskog učenja. 
                    <br/>
                    <br/>
                    Predviđanje budućeg kretanja cena nekretnina izvršava se modelom mašinskog učenja koji 
                    koristi algoritam baziran na vremenskim serijama - 
                    <Link to="https://learn.microsoft.com/en-us/dotnet/api/microsoft.ml.transforms.timeseries.ssaforecastingestimator?view=ml-dotnet"> 
                    <i>Singular Spectrum Analysis</i> 
                    </Link>. 
                   Ovaj algoritam vrši dekomponovanje vremenske serije na manje komponente poput trendova, 
                    sezona i buke, a koriste se i za predviđanje budućih vrednosti vremenske serije, kao u ovom slučaju. 
                </p>
                <p>
                    Procenjivanje nekretnina takođe koristi svoj model mašinskog učenja koji je implementiran 
                    korišćenjem regresionog algoritma - 
                    <Link to='https://learn.microsoft.com/en-us/dotnet/api/microsoft.ml.trainers.fasttree.fasttreetweedietrainer?view=ml-dotnet'>
                        <i>Fast Tree Tweedie</i>
                    </Link>. Ovaj algoritam u pozadini koristi drvo odlučivanja prilikom izvršavanja.
                </p>
                </div>
        <p>
            Aplikacija je implementirana 2023. godine za potrebe izrade master rada. Podaci prikupljeni sa sajtova 
            navedenih oglašivača korišćeni su isključivo u akademske svrhe izrade ove neprofitne aplikacije. Sva 
            prava zadržava autor aplikacije - Nebojša Marjanović.
        </p>
        <p>
            Kontakt: nebojsamarjanovic6@gmail.com
        </p>
        </div>
    )
}

export default AboutCard;