import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, onDelete }) => {
  return todos.map((todo) => (
  <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} onDelete={onDelete}/>
  ));
};

export default TodoList;