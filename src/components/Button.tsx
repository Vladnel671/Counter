import React from 'react';

type ButtonPropsType = {
    ResetCallback: () => void
    IncCountCallback: () => void

}


export const Button = (props: ButtonPropsType) => {
    const IncOnClickButtonHandler = () => {
        props.IncCountCallback()
    }

    const ResetOnClickButtonHandler = () => {
        props.ResetCallback()
    }

    return (<div>
            <button onClick={IncOnClickButtonHandler} >Inc</button>
            <button onClick={ResetOnClickButtonHandler}>Reset</button>
            <button onClick={ResetOnClickButtonHandler}>Set</button>
        </div>
    );
};

export default Button;