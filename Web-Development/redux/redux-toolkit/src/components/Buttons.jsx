import {useDispatch} from 'react-redux'
import {useRef} from 'react'
import {counterActions} from '../store/counter.js'
import {privacyActions} from '../store/privacy.js' //action of privacy is getting imported to be dispatched 

function CounterButtons (){
  
  const dispatch = useDispatch();//use to dispatch actions
  const refElement = useRef();
  
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  
  const addHandler = () => {
    dispatch(counterActions.add(refElement.current.value));
  };
  
  const subtractHandler = () => {
   dispatch(counterActions.substract(refElement.current.value));
  };
  
  const privacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  
  return(
  <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={incrementHandler}>Add +1</button>
          
       <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={decrementHandler}>Minus -1</button>
       <div style={{display:'flex',flexWrap: 'wrap'}}>
       <input type="text" placeholder="Enter number to add or substract" style={{ 
  width: '100%', 
  height: '40px', 
  fontSize: '16px', 
  borderColor: '#ccc', 
  borderRadius: '4px', 
  paddingLeft: '10px'
}} ref={refElement}/>

     <button style={{ 
  backgroundColor: '#4caf50', 
  color: 'white', 
  padding: '10px 20px', 
  borderRadius: '4px', 
  border: 'none', 
  cursor: 'pointer',
  marginTop: '10px',
  marginLeft: '10px'
}} onClick={addHandler}>Add</button>
 
  <button style={{ 
  backgroundColor: '#4caf50', 
  color: 'white', 
  padding: '10px 20px', 
  borderRadius: '4px', 
  border: 'none', 
  cursor: 'pointer',
  marginTop: '10px',
  marginLeft: '10px'
}} onClick={subtractHandler}>Substract</button>
  <button style={{ 
  backgroundColor: 'red', 
  color: 'white', 
  padding: '10px 20px', 
  borderRadius: '4px', 
  border: 'none', 
  cursor: 'pointer',
  marginTop: '10px',
  marginLeft: '10px'
}} onClick={privacyToggle}>Private</button>
        </div>
        </div>
        
        
 </>
 )
};

export default CounterButtons;