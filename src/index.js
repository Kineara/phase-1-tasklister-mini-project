document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", addNewTask);

  function addNewTask(e) {
    e.preventDefault();

    newListItem = document.createElement("li");
    newListItem.textContent = taskForm.querySelector('#new-task-description').value;
    taskList.appendChild(newListItem);
    taskForm.reset();
  }
});
