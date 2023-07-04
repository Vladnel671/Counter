import React, {ChangeEvent, useEffect, useState} from "react";
import './CounterWithRedux.css'
import './../Counter/Settings/SettingsWrapper/Settings.css'
import CounterWrapper from "./CounterWrapper/CounterWrapper";
import SettingsWrapper from "../Counter/Settings/SettingsWrapper/SettingsWrapper";

function CounterWithRedux() {

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
    const [isValidFirstInput, setIsValidFirstInput] = useState(true);
    const [isValidSecondInput, setIsValidSecondInput] = useState(true);

    useEffect(() => {
        let newMin = localStorage.getItem('min')
        let newMax = localStorage.getItem('max')
        if (newMin && newMax) {
            let newMinParsed = JSON.parse(newMin) ?? minValue;
            let newMaxParsed = JSON.parse(newMax) ?? maxValue;
            setMinValue(newMinParsed)
            setMaxValue(newMaxParsed)

        }
    }, [])

    useEffect(() => {
        let newMin = localStorage.getItem('min')
        if (newMin) {
            let newMinParsed = JSON.parse(newMin) ?? minValue;
            setCount(newMinParsed)
        }
    }, [])

    useEffect(() => {
        updateButtonStatus()
    }, [count]);

    useEffect(() => {
        if (maxValue >= 1 && minValue >= 0) {
            setErrorMessage('enter values and press set')
            setIsValidFirstInput(true)
            setIsValidSecondInput(true)
            if (maxValue === minValue) {
                setIsValidFirstInput(false)
                setIsValidSecondInput(false)
                setErrorMessage('incorrect values')
                setButtonStates([true, true, true])
            }else {
                setIsValidFirstInput(true)
                setIsValidSecondInput(true)
                if(minValue > maxValue) {
                    setIsValidFirstInput(false)
                    setIsValidSecondInput(false)
                    setErrorMessage('incorrect values')
                    setButtonStates([true, true, true])
                }
                if (minValue < maxValue) {
                    setIsValidFirstInput(true)
                    setIsValidSecondInput(true)
                }
            }
        } else {
            if (maxValue < 1) {
                setIsValidSecondInput(false)
                setErrorMessage('incorrect value')
                setButtonStates([true, true, true])
            }else {
                setIsValidSecondInput(true)
            }
            if (minValue < 0){
                setIsValidFirstInput(false)
                setErrorMessage('incorrect value')
                setButtonStates([true, true, true])
            }else {
                setIsValidFirstInput(true)
            }
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
        setIsVisible(false)
        set2IsVisible(false)
        localStorage.setItem('min', JSON.stringify(minValue));
        localStorage.setItem('max', JSON.stringify(maxValue));
        setCount(minValue);
    }

    function handleMinValueChange(event: ChangeEvent<HTMLInputElement>) {
        setButtonStates([false, true, true])
        setMinValue(Number(event.target.value));
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        setButtonStates([false, true, true])
        setMaxValue(Number(event.target.value));
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

    return (
        <div className='main'>
            {/*<SettingsWrapper buttonStates={buttonStates} handleMinValueChange={handleMinValueChange}*/}
            {/*                 isValidFirstInput={isValidFirstInput}*/}
            {/*                 handleMaxValueChange={handleMaxValueChange} isValidSecondInput={isValidSecondInput}*/}
            {/*                 setMinMaxValues={setMinMaxValues} maxValue={maxValue}*/}
            {/*                 minValue={minValue}*/}
            {/*                 disableButtonOnFocusInput={disableButtonOnFocusInput}*/}
            {/*                 disableButtonOnFocusInput2={disableButtonOnFocusInput2} showOnBlur={showOnBlur}/>*/}
            {/*<CounterWrapper isVisibleFor1Input={isVisibleFor1Input} isVisibleFor2Input={isVisibleFor2Input}*/}
            {/*                errorMessage={errorMessage} buttonStates={buttonStates} reset={reset}*/}
            {/*                count={count} changeRed={changeRed} changeRedMessage={changeRedMessage}*/}
            {/*                increment={increment}*/}
            {/*/>*/}
        </div>
    );
}

export default CounterWithRedux;
