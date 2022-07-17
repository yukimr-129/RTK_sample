import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import TodoLIst from './features/todo/TodoList';
import Fetch from './features/fetch/Fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoLIst />
        <Fetch />
      </header>
    </div>
  );
}

export default App;
