import React, {ChangeEvent, useEffect, useState} from "react";
import './Counter.css'
import '../Settings/Settings.css'

function Counter() {
    const [count, setCount] = useState<number>(0);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [buttonStates, setButtonStates] = useState<Array<boolean>>([
        true, // первая кнопка set
        false, // вторая кнопка inc
        false // третья кнопка reset
    ]);
    const [isVisibleFor1Input, setIsVisible] = useState<boolean>(false);
    const [isVisibleFor2Input, set2IsVisible] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        updateButtonStatus()
    }, [count]);

    function updateButtonStatus() {
        if (count === maxValue) {
            setButtonStates([true, true, false]);
        }
    }

    const disableButtonOnFocusInput = () => {
        setButtonStates([false, true, true])
        setIsVisible(true)
        set2IsVisible(false)
    }
    const disableButtonOnFocusInput2 = () => {
        setButtonStates([false, true, true])
        setIsVisible(false)
        set2IsVisible(true)
    }
    const showOnBlur = () => {
        setIsVisible(false)
        set2IsVisible(false)
    }

    function increment() {
        if (count < maxValue) {
            setCount(count + 1);
            setErrorMessage('')
        } else {
            setButtonStates([true, true, false])
        }
    }
    function reset() {
        setButtonStates([true, false, false])
        setCount(minValue);
        setErrorMessage('')
    }

    function setMinMaxValues() {
        setButtonStates([true, false, false])
        setCount(minValue);
        setIsVisible(false)
        set2IsVisible(false)
    }

    function handleMinValueChange(event: ChangeEvent<HTMLInputElement>) {
        setMinValue(Number(event.target.value));
        if(minValue !== maxValue && minValue < maxValue && maxValue > 1  && minValue >= 0){
            setErrorMessage('enter value and press set')
            setButtonStates([false,true,true])
        }
        else {
            setErrorMessage('incorrect values')
            setButtonStates([true,true,true])
        }
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        setMinValue(Number(event.target.value));
        if(minValue !== maxValue ||  minValue < maxValue && maxValue > 1  && minValue >= 0){
            setErrorMessage('enter value and press set')
            setButtonStates([false,true,true])
        }
        else {
            setErrorMessage('incorrect values')
            setButtonStates([true,true,true])
        }

    }

    const changeRedMessage = () => {
        return  minValue === maxValue && minValue > maxValue && maxValue < 1  && minValue <= 0 ?  {color: 'red'}: {color: 'black'}
    }

    function changeRed() {
        return {color: count < maxValue ? 'black' : 'red'}
    }

    function inputChangeRed() {
        if (minValue !== maxValue && minValue < maxValue && maxValue > 1  && minValue >= 0) {
            return {backgroundColor: 'rgba(255, 255, 255, 1)'}
        } else {
            return {backgroundColor: 'hsl(0, 100%, 75%)'}
        }
    }

    return (
        <div className='main'>
            <div className='settingsMain'>
                <div className='settingsWrapper'>
                    <div className='startValue'>
                        <h3>start value:</h3><input className='startInput' type="number"
                                                    value={minValue} onFocus={disableButtonOnFocusInput}
                                                    onBlur={showOnBlur}
                                                    onChange={handleMinValueChange}
                                                    style={inputChangeRed()}/>
                    </div>
                    <div className='maxValue'>
                        <h3>max value:</h3><input className='maxInput' type="number"
                                                  value={maxValue} onFocus={disableButtonOnFocusInput2}
                                                  onBlur={showOnBlur}
                                                  onChange={handleMaxValueChange}
                                                  style={inputChangeRed()}/>
                    </div>
                </div>
                <div className='btnWrap'>
                    <button onClick={setMinMaxValues} disabled={buttonStates[0]} className='setButton'>
                        Set
                    </button>
                </div>
            </div>


            <div className='CounterMain'>
                <div className='NumWrap'>
                    <h4>
                        <div>
                            <div>
                                {
                                    isVisibleFor1Input ? (<h4 style={changeRedMessage()}>{errorMessage}</h4>) :
                                        isVisibleFor2Input ? (<h4 style={changeRedMessage()}>{errorMessage}</h4>) :
                                            (<h4 style={changeRed()}>{count}</h4>)
                                }
                            </div>
                        </div>
                    </h4>
                </div>
                <div className='CounterBtnsWrap'>
                    <button onClick={increment} className='inc' disabled={buttonStates[1]}>
                        Increment
                    </button>
                    <button onClick={reset} disabled={buttonStates[2]} className='reset'>
                        Reset
                    </button>
                </div>
            </div>
            {/*кнопки отдельная компонента */}
        </div>
    );
}

export default Counter;