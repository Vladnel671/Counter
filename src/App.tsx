import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";


function App() {

    const [count, setCount] = useState<number>(0);

    const incFunction = () => {

    }
    const resetFunc = () => {

    }
    const changeRed = {

    }


    const IncCountCallback = () => {
        setCount(count + 1);
    }
    const ResetCallback = () => {
        setCount(0)
    }
    const disabledCallback = () => count > 4

    const ChangeRedCallback = () => {
        color: count < 5 ? "black" : "red"
    }

  return (
    <div className="App">
        <Settings/>
        <Counter count={count} IncCountCallback={IncCountCallback} ResetCallback={ResetCallback} />
    </div>
  );


}

export default App;
