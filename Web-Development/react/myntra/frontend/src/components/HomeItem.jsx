import {useDispatch} from 'react-redux'
import {bagActions} from '../store/Bag slice.js'
import {useSelector} from 'react-redux'

const HomeItem = ({item}) => {
const dispatch = useDispatch();
const bagItems = useSelector(store => store.bag);
const elementInBag = bagItems.indexOf(item.id) >= 0;

const handleAddToBag = (id) => {
dispatch(bagActions.addToBag(id));
};

const removeFromBag = (id) => {
dispatch(bagActions.removeFromBag(id));
};

return(
<>
<div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      {item.discount_percentage == 0 && item.rating.stars == 0 && item.rating.count == 0 ? null: <div className="rating">
      {item.rating.stars} | {item.rating.count}
</div>
}
<div className="company-name">
  {item.company}
</div>
<div className="item-name">
  {item.item_name}
</div>
<div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          {item.discount_percentage == 0 ? null: <span className="discount">({item.discount_percentage}% OFF)</span>}
</div>
{!elementInBag ?
<button className="btn-add-bag" onClick={() => handleAddToBag(item.id)}>Add to Bag</button>:

<button className="btn btn-danger btn-remove-bag" type="button" onClick={() => removeFromBag(item.id)}>Remove from Bag</button>}
</div>
</>
)
};

export default HomeItem;