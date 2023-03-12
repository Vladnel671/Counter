import React, {FC} from 'react';

export type CounterPropsType = {
    resetFunc: () => void
}

const Reset: React.FC <CounterPropsType> = ({resetFunc}: CounterPropsType) => {
    return (
        <div>
            <button onClick={resetFunc} className="reset">
                Reset
            </button>
        </div>
    );
};

export default Reset;