import { useState,useEffect } from 'react'

function HeroImage({ value }){
  const [icon,setIcon] = useState();
  
  useEffect(() => {
   let newIcon;
    if(value && value.cod == "200"){
      let iconCod = value.weather[0].icon;
      console.log(iconCod);
       switch (iconCod) {
        case "01d":
          newIcon = "/images/clear-day.png";
          break;
        case "01n":
          newIcon = "/images/clear-night.png";
          break;
        case "02d":
          newIcon = "/images/fewcloud-day.png";
          break;
        case "02n":
          newIcon = "/images/fewcloud-night.png";
          break;
        case "03d":
          newIcon = "/images/scatteredcloud-day.png";
          break;
        case "03n":
          newIcon = "/images/scatteredcloud-night.png";
          break;
        case "04d":
          newIcon = "/images/brokencloud.png";
          break;
        case "04n":
        newIcon = "/images/brokencloud.png";
        break;
        case "09d":
          newIcon = "/images/rainy-day.png";
          break;
        case "09n":
         newIcon = "/images/rainy-night.png";
        case "10d":
          newIcon = "/images/rainy-day.png";
          break;
        case "10n":
          newIcon = "/images/rainy-night.png";
          break;
        case "11d":
          newIcon = "/images/lightning-day-night.png";
          break;
        case "11n":
          newIcon = "/images/lightning-day-night.png";
          break;
        case "13d":
          newIcon = "/images/snakeflake-day.png";
          break;
        case "13n":
          newIcon = "/images/snakeflake-night.png";
          break;
        case "50d":
          newIcon = "/images/mist-day.png";
          break;
        case "50n":
          newIcon = "/images/mist-night.png";
          break;
        default:
          newIcon = "/cloud.gif";
      }} else{
        newIcon = "/noimage.png";
      }
  setIcon(newIcon);
},[value]);
  
  
  return(
    <>
    <div className="flex justify-center h-72 mx-4">
       <img src={icon} className="w-full h-full" />
      </div>
    </>
  )
}

export default HeroImage