import Item from './item.jsx';

export default function FoodItem({foodItems}) {
  return(
    <>
    <div className="list-holder">
    <ul>
    {foodItems.map((name) => (
      <Item key={name} foodname={name}></Item>
    ))}
    </ul>
    </div>< />
  )
}