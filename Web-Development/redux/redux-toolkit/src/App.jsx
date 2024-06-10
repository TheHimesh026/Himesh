import "bootstrap/dist/css/bootstrap.min.css";
import CounterHeader from './components/Header.jsx';
import CounterReduxState from './components/ReduxState.jsx';
import CounterButtons from './components/Buttons.jsx';
import PrivacyMsg from './components/Privacy.jsx'
import {useSelector} from 'react-redux'


function App() {
  const Privacy = useSelector(store => store.privacy); //selects the part of store
  
 return (
  <center>
  <div className="bg-dark text-secondary py-4 text-center" style={{margin:'5px',borderRadius: '4px',padding: '15px',marginTop: '30%'}}>
   <CounterHeader />
   {Privacy ? <PrivacyMsg/> : <CounterReduxState />}
   <CounterButtons />
   </div>
  </center>
   )
}

export default App;
