import {useState,useEffect} from 'react';

function Time () {
  const [info,setInfo] = useState(new Date());
  
  
    useState(() => {
      const intervalId = setInterval(() => {
        setInfo(new Date())
      },1000);
      
      return () => {
        clearInterval(intervalId);
      }
      },[]);
      
      return (
    <>
    <p>Time - {info.toLocaleTimeString()}</p>
    <p>Date - {info.toLocaleDateString()}</p>
    </>
    )
}
export default Time;