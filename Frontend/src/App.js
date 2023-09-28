import './App.css';
import HomePageCard from './components/HomePageCard';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CalculationCard from './components/CalculationCard';
import ForecastCard from './components/ForecastCard';
import NavigationBar from './components/NavigationBar';
import AboutCard from './components/AboutCard';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavigationBar/>
      <Routes>

      <Route
      path=""
      element={
        <>
        <HomePageCard/>
        </>
      }
        />

      <Route
      path="/predvidiCenu"
      element={
        <>
        <ForecastCard/>
        </>
      }
        />

        <Route
      path="/proceniNekretninu"
      element={
        <>
        <CalculationCard/>
        </>
      }
        />

<Route
      path="/uputstvo"
      element={
        <>
        <AboutCard/>
        </>
      }
        />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
