import TodoItem from './todo item.jsx';

export default function TodoItems({todoItems,handleDeleteButton}) {
  return(
    <>
    {
      todoItems.map((list) => (
        <TodoItem date={list.date} todo={list.todo} handleDeleteButton={handleDeleteButton} key={list.todo}/>
      ))} < />
  )
}