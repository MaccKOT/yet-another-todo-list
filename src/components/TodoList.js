import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, filteredTodos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
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
