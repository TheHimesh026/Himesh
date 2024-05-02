function addTask() {
  //event.preventDefault();
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value;
  if (taskText.trim() !== "") {
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}