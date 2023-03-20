import React, {FC, useState} from 'react';
import './Counter.css';
import {Button} from "../Button"
import Number from "./Number";


type AppPropsType = {
    ResetCallback: () => void
    IncCountCallback: () => void
    count: number
}

const Counter: FC<AppPropsType> = ({ResetCallback, IncCountCallback,count}) => {

    return (
        <div>
            <Number count={count}/>
            <Button IncCountCallback={IncCountCallback} ResetCallback={ResetCallback}></Button>
        </div>
    );
};

export default Counter;