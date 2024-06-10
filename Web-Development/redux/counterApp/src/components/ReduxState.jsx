import {useSelector} from 'react-redux'

function CounterReduxState() {
  
const counter = useSelector((store) =>  store.counter);
  return (
  <>
      <div class="col-lg-6 mx-auto">
        <p class="fs-9 mb-8" style={{fontSize: '20px',color:'orange'}}>Current value of Redux counter is: {counter}</p>
        </div>
  </>
  )
};

export default CounterReduxState;
  