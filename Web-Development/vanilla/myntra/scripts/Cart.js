let retrivedBagItems;

onLoad();
  function onLoad(){
    retriveBagItems();
    displayBagItems(); 
};

function retriveBagItems(){
  let jsonData = localStorage.getItem("ItemsInBag");
  retrivedBagItems = jsonData ? JSON.parse(jsonData) : [];
};

function placeOrder(){
  let amount = localStorage.getItem("amount");
  console.log(amount)
  alert(`Your order has been placed of ₹${amount}`);
  localStorage.clear();
  retriveBagItems();
  displayBagItems();
}

function displayBagItems() {
    let cartItemsContainer = document.querySelector('.cart-items-container');
    let innerHTML = '';
    
  if(retrivedBagItems.length === 0){
      innerHTML = `<h2 style="text-align: center;margin-top: 15%">No Items in Cart.Add to view</h2>
      <h4 style="text-align:center;vertical-align:center">Made by Himesh</h4>`;
    }
    
    let filteredItems = retrivedBagItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
    
    filteredItems.forEach(bagItem => {
      innerHTML += generateItemHTML(bagItem);
        });

    cartItemsContainer.innerHTML = innerHTML; 
    calculateSummary(filteredItems);
};

function deleteItem(id){
  let newItemsArray = retrivedBagItems.filter(delId => delId !== id);
  localStorage.setItem("ItemsInBag",JSON.stringify(newItemsArray));
  retriveBagItems();
  displayBagItems();
}


function calculateSummary(filteredItems = []) {
    let cartSummaryContainer = document.querySelector('.cart-items-price-container');
    let totalItemCount = retrivedBagItems.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    let totalAmount = 0;
    let CONVENIENCE_FEE = 99;

    filteredItems.forEach(sum => {
        totalMRP += sum.original_price;
        totalDiscount += Math.floor((sum.original_price * sum.discount_percentage) / 100);
    });
  totalAmount = Math.floor(totalMRP - totalDiscount + CONVENIENCE_FEE);
localStorage.setItem("amount",JSON.stringify(totalAmount));
    let summaryHTML = 
      `<div class="cart-items-price">
           
            <div class="item-price-tag">
                <div id="price-details">PRICE DETAILS</div>
                <div id="total-mrp">Total MRP</div>
                <div id="discount-mrp">Discount on MRP</div>
                <div id="convenience-fee">Convenience Fee</div>
                <div id="total-amount">Total Amount</div>
                </div>
                
<div class="price-tag-container">
<div class="price-tag">
<span id="price-details-count">${totalItemCount} Items</span>
<span id="total-mrp-value">₹${totalMRP}</span>
<span id="discount-mrp-value">₹${totalDiscount}</span>
<span id="convenience-fee-value">₹${CONVENIENCE_FEE}</span>
<span id="total-amount-value">₹${totalAmount}</span>
</div>
</div>
      
 <button class="place-order" onclick="placeOrder()">PLACE ORDER</button>
 </div>`;

    cartSummaryContainer.innerHTML = summaryHTML;
};

function generateItemHTML(item) {
    return `     
    <div class="cart-items">
        <span class="remove-item" onclick={deleteItem(${item.id})}>•</span>
        <div class="cart-image" style="background-image:url(${item.image})"></div>
        
        <div class="item-info">
            <div id="company_name">${item.company}</div>
            <div id="product_name">${item.item_name}</div>
            <div class="price">
                <span id="original_price">₹${item.original_price}</span>
                <span id="current_price">₹${item.current_price}</span>
                <span id="discount_percentge">(${item.discount_percentage}% OFF)</span>
            </div>  
            <div id="return_date">Return before ${item.return_period} days</div>
            <div id="delivery_date">Delivery by ${item.delivery_date}</div>
        </div>
    </div>`;
};