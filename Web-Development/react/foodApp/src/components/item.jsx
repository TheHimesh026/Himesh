import FoodItem from './food item.jsx';
import { useState } from 'react'

function Item({foodname}){
  const [buy,setBuy] = useState(false);
  const [food,setFood] = useState("");
  
  function buyFood(name){
    setBuy(!buy);
    setFood(name);
  }
  
  return (
    <>
    <div className="list-item-holder flex justify-between items-center border mx-1 rounded my-5">
    <li className="list-item text-xl px-2">{foodname}</li>
    <span className="btn-holder">
    <button className={`button border p-2 w-20 h-10 rounded text-white ${buy ? "bg-red-600" : "bg-fuchsia-600"}`} onClick={() => buyFood(foodname)}>{buy ? "Remove" : "Buy"}
    </button>
    </span>
    </div>
    </>
  )
}

export default Item