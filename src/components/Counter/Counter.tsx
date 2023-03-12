import React, { useState } from 'react';
import './Counter.css';
import Wrapper, {CounterPropsType} from "./Wrapper";

const Counter = () => {

    const [count, setCount] = useState<number>(0);

    const incFunction = () => {
        setCount(count + 1);
    }
    const resetFunc = () => {
        setCount(0)
    }

    const changeRed = {
        color: count < 5 ? "black" : "red"
    }


    return (
        <div>
            <Wrapper count={count} resetFunc={resetFunc} incFunction={incFunction} changeRed={changeRed}/>
        </div>
    );
};

export default Counter;