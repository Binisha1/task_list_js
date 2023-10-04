let inputTask = document.querySelector(".input-task");
let addTask = document.querySelector(".add-task");
let taskContainer = document.querySelector(".task-container");

addTask.addEventListener("click", function () {
  let tasks = document.createElement("div");
  tasks.classList.add("tasks");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  li.classList.add("task-list");
  tasks.appendChild(li);

  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fa fa-check"></i>';
  checkBtn.classList.add("checkBtn");
  tasks.appendChild(checkBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fa fa-trash"></i>`;
  deleteBtn.classList.add("deleteBtn");
  tasks.appendChild(deleteBtn);

  if (inputTask.value === "") {
    alert("Enter a task");
  } else {
    taskContainer.appendChild(tasks);
  }

  inputTask.value = "";

  checkBtn.addEventListener("click", function () {
    checkBtn.parentElement.style.textDecoration = "line-through";
  });

  deleteBtn.addEventListener("click", function () {
    deleteBtn.parentElement.remove();
  });
});
