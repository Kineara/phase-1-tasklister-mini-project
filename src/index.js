document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  //Handle todo list sorting
  const sortButton = document.querySelector("#sortButton");
  sortButton.addEventListener("click", sortTasks);

  function sortTasks(e) {
    e.preventDefault();

    const currentTaskList = Array.from(taskList.querySelectorAll("li"));
    clearTaskList();

    function taskGrouper(priority) {
      currentTaskList.forEach((element) => {
        if (element.className === priority) {
          taskList.appendChild(element);
        }
      });
    }

    switch (taskSort.value) {
      case "descending":
        taskGrouper("highPriority");
        taskGrouper("mediumPriority");
        taskGrouper("lowPriority");
        break;
      case "ascending":
        taskGrouper("lowPriority");
        taskGrouper("mediumPriority");
        taskGrouper("highPriority");
        break;
    }
  }

  function clearTaskList() {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

  //Handle task submissions
  taskForm.addEventListener("submit", submitHandler);

  function submitHandler(e) {
    e.preventDefault();

    const newListItemText = taskForm.querySelector(
      "#new-task-description"
    ).value;
    const newListItemPriority =
      taskForm.querySelector("#new-task-priority").value;
    const newListItemDateDue =
      taskForm.querySelector("#new-task-date-due").value;

    if (newListItemText) {
      addTaskItem(newListItemText, newListItemPriority, newListItemDateDue);
    }
  }

  function addTaskItem(task, priority, dateDue) {
    const newListItem = document.createElement("li");
    newListItem.textContent = `${task} `;
    newListItem.className = `${priority}Priority`;
    newListItem.style.color = priorityColor(priority);
    if (dateDue) {
      newListItem.appendChild(addDate(dateDue));
    }
    newListItem.appendChild(addEditBtn());
    newListItem.appendChild(addDeleteBtn());
    taskList.appendChild(newListItem);
    taskForm.reset();
  }

  function addDate(date) {
    let dateElement = document.createElement("span");
    dateElement.textContent = `(Finish by ${date}) `;
    return dateElement;
  }

  function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", (e) => e.target.parentElement.remove());
    return deleteBtn;
  }

  function addEditBtn() {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editTask);
    return editBtn;
  }

  function priorityColor(prioritySelection) {
    switch (prioritySelection) {
      case "high":
        return "red";
        break;
      case "medium":
        return "yellow";
        break;
      case "low":
        return "blue";
        break;
    }
  }

  //Edit existing tasks
  function editTask(e) {
    let updatedItem = prompt("New item: ");
    e.target.parentElement.firstChild.textContent = updatedItem;
  }
});
