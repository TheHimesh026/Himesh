import AppName from './app name.jsx'
import FoodItem from './food item.jsx'
import Container from './container.jsx'
import { useState } from 'react'
import Input from './input.jsx'

export default function FoodApp() {
  
  let [foodItems,setFoodItems] = useState([]);
  
  const addItem = (foodInput) => {
    let newFoodItems = [...foodItems,foodInput];
    setFoodItems(newFoodItems);
  }
  return (
    <>
    <Container>
    <AppName />
    <Input handleAddButton={addItem} />
    <FoodItem foodItems={foodItems} />
    </Container>
    </>
  )
}