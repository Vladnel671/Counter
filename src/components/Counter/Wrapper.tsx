import React from 'react';
import Reset from "./Reset";
import Inc from "./Inc";

export type CounterPropsType = {
    count: number
    incFunction: () => void
    resetFunc: () => void
    changeRed: object
}

const Wrapper : React.FC <CounterPropsType> = ({count, incFunction, resetFunc, changeRed}:CounterPropsType) => {
    return (
        <div className='wrapper'>
            <Inc count={count} incFunction={incFunction} changeRed={changeRed}/>
            <Reset resetFunc={resetFunc}/>
        </div>
    );
};

export default Wrapper;