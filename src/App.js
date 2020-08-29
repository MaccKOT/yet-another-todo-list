import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
