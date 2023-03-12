import React from 'react';

export type CounterPropsType = {
    count: number
    incFunction: () => void
    changeRed: object
}

const Inc: React.FC<CounterPropsType> = ({count, incFunction, changeRed}:CounterPropsType) => {
    return (
            <div>
                <button type="button" onClick={incFunction} disabled={ count > 4 } className="inc">
                    Inc
                </button>
                <div style={changeRed}>{count}</div>
            </div>
    );
};

export default Inc;