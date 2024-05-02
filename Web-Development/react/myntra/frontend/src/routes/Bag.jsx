import BagSummary from '../components/Bag summary.jsx'
import BagItem from '../components/Bag item.jsx'
import {useSelector} from 'react-redux'
import '../index.css'

const Bag = () => {

const bagItems = useSelector(state => state.bag);
const items = useSelector(state => state.items);
const finalItem = items.filter(item => {
const itemIndex = bagItems.indexOf(item.id);
return itemIndex >= 0;
});

return(
<>
<main>
    <div className="bag-page">
     {finalItem.map((item) => <BagItem item={item} key={item.id} />)}
     <BagSummary />
</div>
</main>
</>
)
};

export default Bag;