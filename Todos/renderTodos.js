import toDos from "../Database/todos.js";
import { deleteToDo } from "./delete.js";

export function renderTodos() {
  document.getElementById("toDos").innerHTML = "<h1>My To-Dos</h1>";
  toDos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("taskDiv");
    todoDiv.id = todo.id;

    const todoTask = document.createElement("span");
    todoTask.textContent = todo.taskName;
    todoTask.classList.add("taskName");
    todoDiv.appendChild(todoTask);

    const todoStatus = document.createElement("span");
    todoStatus.textContent = todo.status;
    todoStatus.classList.add("taskStatus");
    todoDiv.appendChild(todoStatus);

    const todoDelete = document.createElement("button");
    todoDelete.textContent = "DELETE";
    todoDelete.classList.add("taskDeleteButton");
    todoDelete.addEventListener("click", deleteToDo);
    todoDiv.appendChild(todoDelete);

    const todoList = document.getElementById("toDos");
    todoList.appendChild(todoDiv);
  });
}
