document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", submitHandler);

  function submitHandler(e) {
    e.preventDefault();

    const newListItemText = taskForm.querySelector('#new-task-description').value;
    const newListItemPriority = taskForm.querySelector('#new-task-priority').value;

    if (newListItemText) {
      addTaskItem(newListItemText, newListItemPriority);
    }
  }

  function addTaskItem(task, priority) {
    const newListItem = document.createElement("li");
    newListItem.textContent = `${task} `;
    newListItem.style.color = priorityColor(priority);
    newListItem.appendChild(addEditBtn());
    newListItem.appendChild(addDeleteBtn());
    taskList.appendChild(newListItem);
    taskForm.reset();
  }

  function editTask(e) {
    let updatedItem = prompt("New item: ");
    e.target.parentElement.firstChild.textContent = updatedItem;
  }

  function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", e => e.target.parentElement.remove());
    return deleteBtn;
  }

  function addEditBtn() {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editTask);
    return editBtn;
  }

  function priorityColor(prioritySelection) {
    switch(prioritySelection) {
      case "High":
        return "red";
        break;
      case "Low":
        return "blue";
        break;
    }
  }
});
