import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter2/Counter2";
import {Route, Routes} from "react-router-dom";
import CounterWithRedux from "./components/CounterWithRedux/CounterWithRedux";
import {Header} from "./components/Header/Header";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Counter/>}/>
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/counterV2' element={<Counter2/>}/>
                <Route path='/counterWithRedux' element={<CounterWithRedux/>}/>
            </Routes>
        </div>
    );
}

export default App;
