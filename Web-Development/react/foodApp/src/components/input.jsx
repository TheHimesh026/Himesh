import {useState} from 'react';

 export default function Input({handleAddButton}){
   
   const [foodInput,setFoodInput] = useState([]);
   
   let handleInputChange = (event) => {
     let inputValue = event.target.value;
      setFoodInput(inputValue);
   }
   return(
     <>
     <div className="flex justify-around my-5">
     <input type="text" placeholder="Enter Healthy food" onChange={handleInputChange} className="border px-2 outline-none"/>
     <button className="button border bg-fuchsia-600 p-2 w-20 h-10 rounded text-white" onClick={(event) => {handleAddButton(foodInput)}}>Add</button>
     </div>
     </>
     )
 }