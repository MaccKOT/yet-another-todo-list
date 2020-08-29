import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
