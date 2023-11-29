import React from "react";

const Todo = ({ todo, toggleTodo, onDelete }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const handleClear = () => {
    onDelete(todo.id);
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        onChange={handleTodoClick}
      />
      <label className="todo-checkbox">{todo.name}</label>
      <button 
        onClick={handleClear}
        className="icon-delete">×</button>
    </div>
  );
};

export default Todo;
