import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {Outlet} from 'react-router-dom'
import FetchItems from '../components/Fetch items.jsx'
import {useSelector} from 'react-redux'
import Loading from '../components/Loading.jsx'

function App() {

const fetchStatus = useSelector(store => store.fetchingStatus);

return (
<>
<Header />
<FetchItems />
{fetchStatus.currentlyFetching ? <Loading />: <Outlet />}
<Footer />
</>
);
}

export default App;