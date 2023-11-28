import React from "react";

const Todo = ({ todo, toggleTodo, onDelete }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const handleClear = () => {
    onDelete(todo.id)
  };

  return (
    <div className="todo">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
      <button onClick={handleClear}>×</button>
    </div>
  );
};

export default Todo;
