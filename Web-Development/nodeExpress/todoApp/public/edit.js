const queryUrl = new URLSearchParams(window.location.search);
const taskId = queryUrl.get("id");
const taskIdHolder = document.querySelector("#taskId");
const taskNameHolder = document.querySelector("#taskName");
const checkboxHolder = document.querySelector("#checkbox-input");
const getSingleUrl = `http://localhost:5173/api/v1/task/fetch/${taskId}`;

fetchInfo();
let info;
function fetchInfo(){
  if(taskId){
  fetch(getSingleUrl)
  .then(res => res.json())
  .then(data => {
    info = data;
    onLoadFetching();
  })
  .catch(error => console.error("Error while getting info",error))
}};

 function onLoadFetching(){
   checkboxHolder.checked = info.isDone;
   taskIdHolder.value = taskId;
   taskNameHolder.value = info.name;
 };
 
 function editInfo(){
   redirect();
   const updateUrl = `http://localhost:5173/api/v1/task/update/${taskId}`;
  let todo = taskNameHolder.value;
  let checkbox = checkboxHolder.checked;
  if(todo !== "") {
    fetch(updateUrl,{
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:todo,
      isDone:checkbox
    })
  })
  .then(res => window.location.href = "http://localhoat:5173/")
  .catch(error => console.error("Error while editing info",error))
 }};
 
function redirect(){
  console.log("hhaj")
   window.location.href = 'http://localhost:5173/';
};