import {useDispatch} from 'react-redux'
import {useRef} from 'react'

function CounterButtons (){
  
  const dispatch = useDispatch();
  const refElement = useRef();
  
  const incrementHandler = () => {
    dispatch({type: "INCREMENT"});
  }
  
  const decrementHandler = () => {
    dispatch({type: "DECREMENT"});
  }
  
  const inputAdd = () => {
    dispatch({type: "INPUT_ADD",
    payload:{
      num: refElement.current.value,
    }})
  };
  
  const inputSubs = () => {
    dispatch({type: "INPUT_SUBS",
    payload:{
      num: refElement.current.value,
    }})
  };
  
  const privacyToggle = () => {
    dispatch({type: "PRIVACY"})
  };
  
  return(
  <>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={incrementHandler}>Add +1</button>
          
       <button type="button" class="btn btn-outline-light btn-lg px-4" onClick={decrementHandler}>Minus -1</button>
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
}} onClick={inputAdd}>Add</button>
 
  <button style={{ 
  backgroundColor: '#4caf50', 
  color: 'white', 
  padding: '10px 20px', 
  borderRadius: '4px', 
  border: 'none', 
  cursor: 'pointer',
  marginTop: '10px',
  marginLeft: '10px'
}} onClick={inputSubs}>Substract</button>
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