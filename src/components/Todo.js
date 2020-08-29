import React from 'react';

export default () => {
  return (
    <div>
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <form>
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <div className="todo-container">
        <ul className="todo-list"></ul>
      </div>
    </div>
  );
};
