import '../index.css'
import {useSelector} from 'react-redux'

const BagSummary = () => {

const bagItems = useSelector(state => state.bag);
const items = useSelector(state => state.items);
const finalItem = items.filter(item => {
const itemIndex = bagItems.indexOf(item.id);
return itemIndex >= 0;
});

let totalItem = finalItem.length;
let totalMRP = 0;
let totalDiscount = 0;
let DELIVERY_FEE = 99;

finalItem.forEach((item) => {
totalMRP += Math.floor(item.original_price);
totalDiscount += Math.floor(item.original_price - item.current_price);
})

let finalPayment = Math.floor(totalMRP - totalDiscount + DELIVERY_FEE);

const handlePlaceOrder = () => {
alert(`Order placed of ₹${finalPayment}.
Log-in to DarkWeb and enter your address to collect your parcel`);
};

return(
<>
<div className="bag-summary">
  <div className="bag-details-container">
    <div className="price-header">
PRICE DETAILS ({totalItem} Items)
</div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
</div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
</div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{totalItem == 0 ? 0: DELIVERY_FEE}</span>
</div>
  <hr />
  <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{totalItem == 0 ? 0: finalPayment }</span>
</div>
  <button className="btn-place-order" onClick={handlePlaceOrder}>
    <div className="css-xjhrni">
PLACE ORDER
  </div>
  </button>
</div>
</div>
</>
)
};

export default BagSummary;