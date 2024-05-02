import './todo.css';
import {useState} from "react";

export default function AddTodo({onNewItem}) {
  
  const [todo,setTodo] = useState([]);
  const [date,setDate] = useState([]);
  
  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  }
  
  const handleDateChange = (event) => {
    setDate(event.target.value);
  }
  
  const handleAddButton = () => {
    event.preventDefault();
    onNewItem(todo,date);
    setTodo("");
    setDate("");
  }
  return(
    <>
    <div className="container1">
    <form className="row1" onSubmit={handleAddButton}>
      <div id="text">
        <input type="text" placeholder="Enter Todo" onChange={handleTodoChange} value={todo} maxLength="20"/>
    </div>
      <div id="date">
        <input type="date" onChange={handleDateChange} value={date}/>
    </div>
      <div id="btn-holder">
        <button type="submit" className="button">Add</button>
    </div>
    </form>
</div> < />
)
}