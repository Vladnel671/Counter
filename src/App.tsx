import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter2/Counter2";


function App() {

    return (
        <div className="App">
            {/*<Counter/>*/}
            <Counter2/>
        </div>
    );
}

export default App;
