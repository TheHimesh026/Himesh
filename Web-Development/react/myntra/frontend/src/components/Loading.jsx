import {useState} from 'react'
import '../index.css'

const Loading = () => {
  
 let [failed,setFailed] = useState(false);
  
  setTimeout(() => {
    setFailed(true);
    },4000);
  
return(
<>
{!failed ? 
<center>
  <div style={{marginTop: '10vh', marginBottom: '10vh'}}>
    <h2>Connection slow!<sup> ...zzz</sup></h2>
    <div className="d-flex justify-content-center align-items-center" style={{marginTop: '15px',width: '50px',height: '50px'}}>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div>
</div>
</center>:

 <center>
  <div style={{marginTop: '10vh', marginBottom: '10vh'}}>
    <h3><strong>Looks that you have not started backend server !!</strong></h3>:
    <h1>🚩🚩|| JAI SHREE RAM ||🚩🚩</h1>
    <div className="img-holder">
    <img src="hanuman ji.jpeg" />
    </div>
</div>
</center>}
</>
)
}

export default Loading;