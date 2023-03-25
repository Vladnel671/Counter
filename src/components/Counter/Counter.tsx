import React, {ChangeEvent, useEffect, useState} from "react";
import './Counter.css'
import '../Settings/Settings.css'

function Counter() {
    const [count, setCount] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [buttonStates, setButtonStates] = useState([
        true, // первая кнопка set
        false, // вторая кнопка inc
        false // третья кнопка reset
    ]);

    let error = 'enter values and press "set"'

    const countOrError = () => {
        if (buttonStates[0]) {
            return count
        } else {
            return error
        }
    }

    useEffect(() => {
        updateButtonStatus();
    }, [count]);

    function updateButtonStatus() {
        if (count === maxValue) {
            setButtonStates([true, true, false]);
        }
    }

    const disableButtonOnFocusInput = () => {
        setButtonStates([false, true, true])
        countOrError()
    }

    const disableButtonOnBlurInput = () => {
        setButtonStates([true, false, false])
    }

    function increment() {
        if (count < maxValue) {
            setCount(count + 1);
        } else {
            setButtonStates([true, true, false])
        }
    }

    function reset() {
        setButtonStates([true, false, false])
        setCount(minValue);
    }

    function setMinMaxValues() {
        setButtonStates([true, false, false])
        setCount(minValue);
    }

    function handleMinValueChange(event: ChangeEvent<HTMLInputElement>) {
        setMinValue(Number(event.target.value));
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        setMaxValue(Number(event.target.value));
    }

    function changeRed() {
        return {color: count < maxValue ? 'black' : 'red'}
    }


    return (
        <div className='main'>
            <div className='settingsMain'>
                <div className='settingsWrapper'>
                    <div className='startValue'>
                        <h3>start value:</h3><input className='startInput' type="number"
                                                    value={minValue} onFocus={disableButtonOnFocusInput}
                                                    onChange={handleMinValueChange}/>
                    </div>
                    <div className='maxValue'>
                        <h3>max value:</h3><input className='maxInput' type="number"
                                                  value={maxValue} onFocus={disableButtonOnFocusInput}
                                                  onChange={handleMaxValueChange}/>
                    </div>
                </div>
                <div className='btnWrap'>
                    <button onClick={setMinMaxValues} disabled={buttonStates[0]} className='setButton'>Set</button>
                </div>
            </div>

            <div className='CounterMain'>
                <div className='NumWrap'>
                    <h1 style={changeRed()}>{countOrError()}</h1>
                </div>
                <div className='CounterBtnsWrap'>
                    <button onClick={increment} className='inc' disabled={buttonStates[1]}>Increment</button>
                    <button onClick={reset} disabled={buttonStates[2]} className='reset'>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;