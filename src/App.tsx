import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList, { Item } from 'component/ItemList';

const items: Item[] = [{name: 'item a', isCompleted: true}, {name: 'item b', isCompleted: false}];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ItemList items={items}></ItemList>
    </div>
  );
}

export default App;
