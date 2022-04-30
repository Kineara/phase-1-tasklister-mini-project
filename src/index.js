document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", submitHandler);

  function submitHandler(e) {
    e.preventDefault();

    const newListItemText = taskForm.querySelector('#new-task-description').value;

    if (newListItemText) {
      addTaskItem(newListItemText);
    }
  }

  function addTaskItem(task) {
    const newListItem = document.createElement("li");
    newListItem.textContent = `${task} `;
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
