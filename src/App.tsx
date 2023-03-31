import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter2/Counter2";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <div className='header'>
                <NavLink to="/counter"  style={{textDecoration: "none"}}><h3 className='counter'>Counter</h3></NavLink>
                <NavLink to="/counterV2" style={{textDecoration: "none"}}><h3 className='counterV2'>Counter V2</h3></NavLink>
            </div>
            <Routes>
                <Route path='/' element={<Counter/>}/>
                <Route path='/counterV2' element={<Counter2/>}/>
                <Route path='/counter' element={<Counter/>}/>
            </Routes>
        </div>
    );
}

export default App;
