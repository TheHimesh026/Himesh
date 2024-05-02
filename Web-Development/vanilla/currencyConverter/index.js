const inputBoxContainer = document.querySelector('#input-box');
const valueDisplayerContainer = document.querySelector('.value-displayer');
const toBoxContainer = document.querySelector('#to-box');
const fromBoxContainer = document.querySelector('#from-box');
  
  let toCheckedVal;
  let fromCheckedVal;

  function callSubmit(){
  getValue();
};
  
  function getValue(){
  let inputValue = inputBoxContainer.value;
  let toValue = toBoxContainer.value;
  let fromValue = fromBoxContainer.value;
  fetchData(toValue, fromValue, inputValue);
};
  
  function fetchData(toValue, fromValue, inputValue){
   fetch('http://localhost:2626/items')
    .then(data => data.json())
    .then(response => {
      let {items} = response;
      let exchangeRates = items[0];
    
      let toExchangeRate = exchangeRates[toValue];
      let fromExchangeRate = exchangeRates[fromValue];
      
   if (toExchangeRate !== undefined && fromExchangeRate !== undefined) {
      fromCheckedVal = fromExchangeRate;
      toCheckedVal = toExchangeRate;
      displayValue(toValue, fromValue, inputValue)
      } else {
        alert("error in response".toUpperCase())
      }
    });
};

function displayValue(toValue, fromValue, inputValue){
  let inputVal = inputValue || 0;
  let constValue = (1 / fromCheckedVal) * inputVal * toCheckedVal;
  let data = `${inputVal} ${fromValue} = ${constValue} ${toValue}`;
   localStorage.setItem("data", JSON.stringify(data));
  onRefresh();
};
  
function onRefresh(){
  let stringData = localStorage.getItem("data");
  let data = JSON.parse(stringData);
  valueDisplayerContainer.innerText = data;
  setTimeout(() => {
    localStorage.clear();
  },1000);
};
