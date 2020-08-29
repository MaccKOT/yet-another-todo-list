import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            text={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
