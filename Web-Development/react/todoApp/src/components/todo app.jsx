import AddTodo from './add todo.jsx'
import AppName from './app name.jsx';
import TodoItems from './todo items.jsx'
import './todo.css';
import Container from './container.jsx';
import {useState,useReducer} from 'react';

const todoItemsReducer = (currTodoItems,action) => {
  
  let newTodoItems = currTodoItems;
  
  if(action.type === "ADD_ITEM"){
    newTodoItems = [...currTodoItems,{todo:action.payload.todo,date:action.payload.date},];}
  
  else if(action.type === "DELETE_ITEM"){
      newTodoItems = currTodoItems.filter((item) => item.todo !== action.payload.todo)
    }
    return newTodoItems;
}

export default function TodoApp () {
  
  const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);
  
  const addItem = (todo,date) => {
  let newItemAction = {
    type: 'ADD_ITEM',
    payload: {
      todo,
      date,
    }
  }
  dispatchTodoItems(newItemAction);
  }

  const deleteItem = (todo) => {
    let newItemAction = {
    type: 'DELETE_ITEM',
    payload: {
      todo,
    }
    }
   dispatchTodoItems(newItemAction);
  }
  
  return(
    <>
    <AppName />
    <AddTodo onNewItem={addItem} />
    {todoItems.length==0 && <h2>Enjoy your day!</h2>}
    <TodoItems todoItems={todoItems} handleDeleteButton={deleteItem}/> < />
  )
}