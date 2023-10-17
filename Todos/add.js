import toDos from "../Database/todos.js";
import { renderTodos } from "./renderTodos.js";

export function addToDo(e) {
  e.preventDefault();
  let newID = toDos[toDos.length - 1].id + 1;
  let newToDo = {};
  newToDo.id = newID;
  newToDo.taskName = document.getElementById("addEditTaskName").value;
  newToDo.status = document.getElementById("addEditTaskStatus").value;
  toDos.push(newToDo);
  renderTodos();
}
