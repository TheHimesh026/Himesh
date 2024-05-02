import Info from './info.jsx'
import HeroImage from './hero-img.jsx'
import GeneralInfo from './general-info.jsx'
import { useContext,useEffect } from 'react'
import { dataContext } from '../App.jsx'

function HeroSection(){
  const dataValue = useContext(dataContext);
  const condition = dataValue ? dataValue.weather[0].main :  "Pleasant";
  const location = dataValue ? dataValue.name : "India";
  const temperature = dataValue ? dataValue.main.temp : 0;
  
  return(
    <>
     <div className="w-full mt-6 px-2">
      <HeroImage value={dataValue}/>
      <GeneralInfo condition={condition} location={location} temp={temperature}/>
      <Info data={dataValue}/>
     </div>
    </>
  )
}

export default HeroSection