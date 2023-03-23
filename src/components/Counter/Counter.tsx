import React, {ChangeEvent, useState} from "react";
import './Counter.css'
import '../Settings/Settings.css'

function Counter() {
    const [count, setCount] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    function increment() {
        if (count < maxValue) {
            setCount(count + 1);
        }
    }

    function reset() {
        setCount(minValue);
    }

    function setMinMaxValues() {
        setCount(minValue);
    }

    function handleMinValueChange(event: ChangeEvent<HTMLInputElement>) {
        setMinValue(Number(event.target.value));
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        setMaxValue(Number(event.target.value));
    }

    function ChangeRed() {
        return {color: count < maxValue ? 'black' : 'red'}
    }

    function disableButton() {
        return count === maxValue
    }

    return (
        <div className='main'>
            <div className='settingsMain'>
                <div className='settingsWrapper'>
                    <div className='startValue'>
                        <h3>start value:</h3><input className='startInput' type="number"
                                                    value={minValue}
                                                    onChange={handleMinValueChange}/>
                    </div>
                    <div className='maxValue'>
                        <h3>max value:</h3><input className='maxInput' type="number"
                                                  value={maxValue}
                                                  onChange={handleMaxValueChange}/>
                    </div>
                </div>
                <div className='btnWrap'>
                    <button onClick={setMinMaxValues} className='setButton'>Set</button>
                </div>
            </div>

            <div className='CounterMain'>
                <div className='NumWrap'>
                    <h1 style={ChangeRed()}>{count}</h1>
                </div>
                <div className='CounterBtnsWrap'>
                    <button onClick={increment} className='inc' disabled={disableButton()}>Increment</button>
                    <button onClick={reset} className='reset'>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;