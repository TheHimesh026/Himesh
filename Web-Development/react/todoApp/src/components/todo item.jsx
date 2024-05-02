import './todo.css';

export default function TodoItem({todo ,date,handleDeleteButton}) {
  return(
    <>
    <div className="container2">
    <div className="row2">
      <div id="text">
      <p>{todo}</p>
    </div>
      <div id="date">
      <p>{date}</p>
    </div>
      <div id="btn-holder">
        <button type="button" className="button" onClick={()=>{handleDeleteButton(todo)}}>Delete
</button>
    </div>
    </div>
    </div> < />
  )
}