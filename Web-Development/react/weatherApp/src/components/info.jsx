import ExtraInfo from './extra-info.jsx'

function Info({data}){
  
  const windSpeedValue = data ? data.wind.speed : 0;
  const humidityValue = data ? data.main.humidity : 0;
  const visibilityValue = data ? data.visibility : 0;
  
  return(
    <>
     <div className="flex justify-around">
      <ExtraInfo name={"Wind Speed"} value={windSpeedValue + "km/h"} src={"/wind.gif"}/>
      <ExtraInfo name={"Humidity"} value={humidityValue + "%"} src={"/humidity.gif"}/>
      <ExtraInfo name={"Visibility"} value={visibilityValue >= 1000 ? (visibilityValue/1000 + "km") : (visibilityValue + "m")} src={"/vision.gif"}/>
     </div>
    </>
  )
}

export default Info 