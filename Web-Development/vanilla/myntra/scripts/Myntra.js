let itemContainerElement = document.querySelector('.items-container');

onLoad();

function onLoad(){
  displayItemsOnHome(); 
};

const bagItems = [];

   function displayItemsOnHome() {
     if(itemContainerElement){
       let innerHtml = '';
       items.forEach(item => {
        innerHtml += `<div class="item-container">
           <div class="item-image" style="background-image:url(${item.image})"></div>
           <div class="stars">${item.rating.stars} ⭐ | ${item.rating.count}</div>
           <div class="company"> ${item.company} </div>
           <div class="item-name"> ${item.item_name} </div>
           <div class="price-container">
            <span class="current-price"> Rs ${item.current_price} </span>
            <span class="original-price"> Rs ${item.original_price} </span>
            <span class="discount-percentage"> (${item.discount_percentage}% OFF) </span>
           </div>
            <button class="btn-bag" onclick={addToBag(${item.id})}>Add to bag</button>
          </div>`
       })
          itemContainerElement.innerHTML = innerHtml; 
   }};
   
function addToBag(id){
  bagItems.push(id);
  localStorage.setItem("ItemsInBag",JSON.stringify(bagItems));
  console.log('done',bagItems);
}