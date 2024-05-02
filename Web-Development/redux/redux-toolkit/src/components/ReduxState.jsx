import {useSelector} from 'react-redux'

function CounterReduxState() {
  
const {counterValue} = useSelector((store) =>  store.counter);

  return (
  <>
      <div className="col-lg-6 mx-auto">
        <p className="fs-9 mb-8" style={{fontSize: '20px',color:'orange'}}>Current value of Redux counter is: {counterValue}</p>
        </div>
  </>
  )
};

export default CounterReduxState;
  