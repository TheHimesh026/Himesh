const liContainer = document.querySelector(".li-container");
const inputContainer = document.querySelector(".input-box");
const bodyElement = document.querySelector("body");
const btnElement = document.querySelector(".button");
const containerElement = document.querySelector(".container");
const imgContainerElement = document.querySelector(".image-holder");
const imgElement = document.querySelector(".image");
const emptyMsgElement = document.querySelector(".empty-msg");
const liItemContainerElement = document.querySelectorAll(".li-item-container");

let todoArray = [];
let i = 0;
onLoadFetching();

function onLoadFetching(){
  const url = `http://localhost:5173/api/v1/task/`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
    todoArray = data.task;
    renderTodo();
    showEmptyMsg();
  })
};

function addTodo(){
  const addUrl = `http://localhost:5173/api/v1/task/post`;
  let todo = inputContainer.value;
  if(todo !== "") {
    fetch(addUrl,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:todo,
      isDone:false
    })
  })
  .then(data => onLoadFetching())
  }
};

function getOneTodo(id){
  const editUrl = `http://localhost:5173/api/v1/task/fetch/${id}`;
  fetch(editUrl)
  .then(res => res.json())
  .then(data => console.log(data))
};

function deleteTodo(id){
  let deleteUrl = `http://localhost:5173/api/v1/task/delete/${id}`;
  fetch(deleteUrl,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json'
    },
  })
  .then(data => {
    onLoadFetching();
    showEmptyMsg();
 })
};

/*function isDone(){
  todoArray.forEach((item) => {
    console.log(item)
  })
};*/

function renderTodo(){
  let innerHtml = "";
  todoArray.forEach(eachItem => {
    innerHtml += 
    `<div class="li-item-container">
     <li class="item-li">${eachItem.name}</li>
    <div class="li-btns">
    <a href="/edit.html?id=${eachItem._id}">
    <button class="edit-btn" onclick="getOneTodo('${eachItem._id}')" ><img src="./edit.png" class="edit-icon"></button></a>
    <button class="delete-btn" onclick="deleteTodo('${eachItem._id}')"><img src="./delete.png" class="delete-icon"></button>
      </div>
    </div>`;
  });
  liContainer.innerHTML = innerHtml;
}


let savedState = localStorage.getItem("State");
let darkState = savedState === "true" ? true : false;
changeDarkState();

function toggleDarkMode(){
  darkState = !darkState;
  localStorage.setItem("State",darkState);
  changeDarkState();
}

function changeDarkState(){
  if(darkState){
    bodyElement.classList.add("dark-bg","dark-text");
    inputContainer.classList.add("dark-border");
    containerElement.classList.add("dark-container");
    imgContainerElement.classList.add("dark-image");
    imgElement.src = "./sun.gif";
  } else{
    bodyElement.classList.remove("dark-bg","dark-text");
    inputContainer.classList.remove("dark-border");
    containerElement.classList.remove("dark-container");
    imgContainerElement.classList.remove("dark-image");
    imgElement.src = "./moon.png";
  }
};

showEmptyMsg();
function showEmptyMsg(){
 i++;
  if(todoArray.length == 0){
    emptyMsgElement.innerText = "Nothing to show :)";
  }else{
    emptyMsgElement.innerText = "";
  }
  
  if(todoArray.length == 1 && i == 2){
    emptyMsgElement.innerText = "Something to show :)";
  }
};
