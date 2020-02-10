import React from 'react';
import './App.css';
import {ListToDos} from './ListToDos'

function App() {

  const list = [{label: "Ir al super"}, {label: "Estudiar"}, {label: "Estudiar"}]

  return (
    <div className="App">
      <ListToDos list={list}/>
    </div>
  );
}

export default App;
