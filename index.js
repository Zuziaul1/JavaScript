const getTaskNameAndDescription = function () {
  const taskName = document.querySelector("#task-name").value;
  const taskDescription = document.querySelector("#task-description").value;
 
  return { taskName, taskDescription };
};
let nextId=1;
const addTask = function () {
  const { taskName, taskDescription } = getTaskNameAndDescription();
  const listItem = document.createElement("li");
  listItem.classList ="list-group-item d-flex justify-content-between align-items-center";
 
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-control-checkbox";
 
  const idSpan = document.createElement("span");
  idSpan.textContent = `Task Number: ${nextId}`;
  nextId++
 
  const taskNameSpan = document.createElement("span");
  taskNameSpan.textContent = taskName;
 
  const taskDescriptionSpan = document.createElement("span");
  taskDescriptionSpan.textContent = taskDescription;
 
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList = "btn btn-danger"
 
  listItem.append(
    checkbox,
    idSpan,
    taskNameSpan,
    taskDescriptionSpan,
    deleteButton
  );
 
  document.querySelector("#task-list").append(listItem);
};

const deleteTask = function () {
  document.getElementById("#task-list").removeChild(listItem);
};

const addDeleteButton= document.querySelector("#del-btn");
addDeleteButton.addEventListener("click", deleteTask);
 
const addTaskButton = document.querySelector("#add-task-btn");
addTaskButton.addEventListener("click", addTask);


const div= document.createElement("div");
checkbox.addEventListener("click", () => (div.style.textDecoration = "strike-through"));
