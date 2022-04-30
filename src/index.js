document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", addNewTask);

  function addNewTask(e) {
    e.preventDefault();

    const newListItem = document.createElement("li");
    const newListItemText = taskForm.querySelector('#new-task-description').value;
    newListItem.textContent = `${newListItemText} `
    newListItem.appendChild(addDeleteBtn());

    taskList.appendChild(newListItem);
    taskForm.reset();
  }

  function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", e => e.target.parentElement.remove());
    return deleteBtn;
  }
});
