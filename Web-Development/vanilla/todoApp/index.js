const liContainer = document.querySelector(".li-container");
const inputContainer = document.querySelector(".input-box");
const bodyElement = document.querySelector("body");
const btnElement = document.querySelector(".button");
const containerElement = document.querySelector(".container");
const imgContainerElement = document.querySelector(".image-holder");
const imgElement = document.querySelector(".image");
const emptyMsgElement = document.querySelector(".empty-msg");
const liItemContainerElement = document.querySelectorAll(".li-item-container");

let retrievedJSON = localStorage.getItem("todoList");
let todoArray;
onLoadFetching();

function onLoadFetching(){
if(retrievedJSON){
   todoArray = JSON.parse(retrievedJSON);
   renderTodo();
} else{
  todoArray = [];
}}
let i = 0;

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

function addTodo(){
  let todo = inputContainer.value.trim();
  if(todo !== "") {
    todoArray.push(todo);
    localStorage.setItem("todoList",JSON.stringify(todoArray));
    renderTodo();
    inputContainer.value = "";
  }
  showEmptyMsg();
}

function deleteTodo(index){
  todoArray.splice(index, 1);
  localStorage.setItem("todoList",JSON.stringify(todoArray));
  renderTodo();
  showEmptyMsg();
}

function renderTodo(){
  let innerHtml = "";
  todoArray.forEach((eachItem,index) => {
    innerHtml += 
    `<div class="li-item-container" onclick="taskDone(this)">
    <li class="item-li">${eachItem}</li>
    <button class="delete-btn button" onclick="deleteTodo(${index})">Delete</button>
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
}

let retrievedItem = JSON.parse(localStorage.getItem("strikedArray"));
let elementArray = retrievedItem ? retrievedItem : [];

function taskDone(element) {
  let elementRetriever = element.querySelector('.item-li');
  if(elementRetriever.style.textDecoration === "line-through"){
    elementRetriever.style.textDecoration = "none";
  } else if(elementRetriever.style.textDecoration === "none"){
    elementRetriever.style.textDecoration = "line-through";
  }
  
  elementArray.push(element.querySelector(".item-li").innerText);
  localStorage.setItem("strikedArray",JSON.stringify(elementArray));
}

storedStrike();
function storedStrike() {
  let liElementFinder = document.querySelectorAll("li");
  liElementFinder.forEach(item => {
    elementArray.forEach(text => {
     if(item.innerText === text){
      item.style.textDecoration = "line-through";
    }
  })
});
}

/*function addTodo(){
  todo = inputContainer.value;
  liContainer.innerHTML += `<div class="li-item-container">
     <li class="item-li">${todo}</li>
     <button class="delete-btn" onclick="deleteTodo()">Delete</button>
      </div>`;
}*/

/*  todoArray.map(eachItem => {
    for(let i = 0; i <= todoArray.length - 1; i++){
  if(todoArray[i] !== inputContainer.value){
  innerHtml += 
    `<div class="li-item-container">
    <li class="item-li">${eachItem}</li>
    <button class="delete-btn" onclick="deleteTodo()">Delete</button>
      </div>`;
  }else{
    console.log("i m in else");
  }}})*/