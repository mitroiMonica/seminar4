import { renderTodos } from "./renderTodos.js";

export function deleteToDo(e) {
  e.preventDefault();
  console.log(e.target.parentElement.id);
  renderTodos();
}
