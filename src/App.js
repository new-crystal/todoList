import React from 'react';
import './App.css';
import TodoList from './pages/TodoList'
import {Routes, Route} from "react-router-dom";
import Detail from './pages/Detail';

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<TodoList />}></Route>
      <Route path='/detail/:id' element = {<Detail />}></Route>
      <Route path = '*' element = {<div>없는 페이지입니다!</div>}></Route>
    </Routes>
    </div>
  
  );
}

export default App;
