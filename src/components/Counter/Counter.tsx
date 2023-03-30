import React, {ChangeEvent, useEffect, useState} from "react";
import './Counter.css'
import '../Settings/Settings.css'
import CounterWrapper from "./CounterWrapper/CounterWrapper";
import SettingsWrapper from "./SettingsWrapper/SettingsWrapper";

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
        let newCount = localStorage.getItem('count')
        let newMin = localStorage.getItem('min')
        let newMax = localStorage.getItem('max')
        if (newCount && newMin && newMax) {
            let newCountParsed = JSON.parse(newCount) ?? count;
            let newMinParsed = JSON.parse(newMin) ?? minValue;
            let newMaxParsed = JSON.parse(newMax) ?? maxValue;
            setCount(newCountParsed)
            setMinValue(newMinParsed)
            setMaxValue(newMaxParsed)
        }
    }, [])

    useEffect(() => {
        updateButtonStatus()
    }, [count]);

    useEffect(() => {
        if (minValue !== maxValue && minValue < maxValue && maxValue >= 1 && minValue >= 0) {
            setErrorMessage('enter value and press set')
        } else {
            setErrorMessage('incorrect values')
            setButtonStates([true, true, true])
        }
    }, [minValue, maxValue])

    function updateButtonStatus() {
        if (count === maxValue) {
            setButtonStates([true, true, false]);
        }
    }

    function comparing() {
        if (minValue !== maxValue && minValue < maxValue && maxValue >= 1 && minValue >= 0) {
            setButtonStates([false, true, true])
        } else {
            setButtonStates([true, true, true])
        }
    }

    const disableButtonOnFocusInput = () => {
        comparing()
        setIsVisible(true)
        set2IsVisible(false)
    }
    const disableButtonOnFocusInput2 = () => {
        comparing()
        setIsVisible(false)
        set2IsVisible(true)
    }
    const showOnBlur = () => {
        setIsVisible(false)
        set2IsVisible(false)
        comparing()
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
        setIsVisible(false)
        set2IsVisible(false)
    }

    function handleMinValueChange(event: ChangeEvent<HTMLInputElement>) {
        setButtonStates([false, true, true])
        setMinValue(Number(event.target.value));
        localStorage.setItem('min', JSON.stringify(Number(event.target.value)));
    }
    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        setButtonStates([false, true, true])
        setMaxValue(Number(event.target.value));
        localStorage.setItem('max', JSON.stringify(Number(event.target.value)));
    }

    const changeRedMessage = () => {
        if (minValue < maxValue && maxValue >= 1 && minValue >= 0) {
            return {color: 'black'}
        } else {
            return {color: 'red'}
        }
    }

    function changeRed() {
        return {color: count < maxValue ? 'black' : 'red'}
    }


    function inputChangeRed() {
        if (minValue !== maxValue && minValue < maxValue && maxValue >= 1 && minValue >= 0) {
            return {backgroundColor: 'rgba(255, 255, 255, 1)'}
        } else {
            return {backgroundColor: 'hsl(0, 100%, 75%)'}
        }
    }

    return (
        <div className='main'>
            <SettingsWrapper buttonStates={buttonStates} handleMinValueChange={handleMinValueChange}
                             handleMaxValueChange={handleMaxValueChange}
                             setMinMaxValues={setMinMaxValues} inputChangeRed={inputChangeRed} maxValue={maxValue}
                             minValue={minValue}
                             disableButtonOnFocusInput={disableButtonOnFocusInput}
                             disableButtonOnFocusInput2={disableButtonOnFocusInput2} showOnBlur={showOnBlur}/>
            <CounterWrapper isVisibleFor1Input={isVisibleFor1Input} isVisibleFor2Input={isVisibleFor2Input}
                            errorMessage={errorMessage} buttonStates={buttonStates} reset={reset}
                            count={count} changeRed={changeRed} changeRedMessage={changeRedMessage}
                            increment={increment}
            />
        </div>
    );
}

export default Counter;
