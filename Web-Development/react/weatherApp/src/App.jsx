import '../index.css'
import Container from './components/container.jsx'
import Navbar from './components/navbar.jsx'
import HeroSection from './components/hero-section.jsx'
import { useEffect,useState,createContext } from 'react'
const accessKey = 'aef03656412300f52dd1f17278037c96';

export const dataContext = createContext();

function App() {
  
  const [weatherData,setWeatherData] = useState();
  
function fetchWeatherData(URL){
  try{
   fetch(URL)
   .then(response => response.json())
   .then(data => setWeatherData(data))
 } catch(error){
   console.log(error);
 }
};

function searchWeather(city){
  const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${accessKey}`;
  fetchWeatherData(URL);
};

useEffect(() => {
  if("geolocation" in navigator) {
   navigator.geolocation.getCurrentPosition(function(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   let URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${accessKey}`;
   fetchWeatherData(URL);
})}
},[]);

  return (
    <>
  <dataContext.Provider value = 
  { weatherData }>
    <Container>
     <Navbar searchFunction={searchWeather} />
     <HeroSection />
    </Container>
  </dataContext.Provider>
    </>
  )
}

export default App
