import React, {ChangeEvent, useEffect} from "react";
import './../Counter/Counter.css'
import './../Counter/Settings/SettingsWrapper/Settings.css'
import CounterWrapper from "./CounterWrapper/CounterWrapper";
import SettingsWrapper from "../Counter/Settings/SettingsWrapper/SettingsWrapper";
import {useDispatch, useSelector} from "react-redux";

import {
    incrementCount,
    setButtonStates, setCount,
    setErrorMessage,
    setIsValidFirstInput,
    setIsValidSecondInput,
    setIsVisibleFor1Input, setIsVisibleFor2Input, setMaxValue, setMinValue
} from "./actions";
import {RootState} from "./store";

function CounterWithRedux() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.count);

    const minValue = useSelector((state: RootState) => state.minValue);
    const maxValue = useSelector((state: RootState) => state.maxValue);

    const buttonStates = useSelector((state: RootState) => state.buttonStates)

    const isVisibleFor1Input = useSelector((state: RootState) => state.isVisibleFor1Input)
    const isVisibleFor2Input = useSelector((state: RootState) => state.isVisibleFor2Input)

    const errorMessage = useSelector((state: RootState) => state.errorMessage)

    const isValidFirstInput = useSelector((state: RootState) => state.isValidFirstInput)
    const isValidSecondInput = useSelector((state: RootState) => state.isValidSecondInput)

    useEffect(() => {
        updateButtonStatus()
    }, [count]);

    useEffect(() => {
        if (maxValue >= 1 && minValue >= 0) {
            dispatch(setErrorMessage('enter values and press set'))
            dispatch(setIsValidFirstInput(true))
            dispatch(setIsValidSecondInput(true))
            if (maxValue === minValue) {
                dispatch(setIsValidFirstInput(false))
                dispatch(setIsValidSecondInput(false))
                dispatch(setErrorMessage('incorrect values'))
                dispatch(setButtonStates([true, true, true]))
            } else {
                dispatch(setIsValidFirstInput(true))
                dispatch(setIsValidSecondInput(true))
                if (minValue > maxValue) {
                    dispatch(setIsValidFirstInput(false))
                    dispatch(setIsValidSecondInput(false))
                    dispatch(setErrorMessage('incorrect values'))
                    dispatch(setButtonStates([true, true, true]))
                }
                if (minValue < maxValue) {
                    dispatch(setIsValidFirstInput(true))
                    dispatch(setIsValidSecondInput(true))
                }
            }
        } else {
            if (maxValue < 1) {
                dispatch(setIsValidSecondInput(false))
                dispatch(setErrorMessage('incorrect value'))
                dispatch(setButtonStates([true, true, true]))
            } else {
                dispatch(setIsValidSecondInput(true))
            }
            if (minValue < 0) {
                dispatch(setIsValidFirstInput(false))
                dispatch(setErrorMessage('incorrect value'))
                dispatch(setButtonStates([true, true, true]))
            } else {
                dispatch(setIsValidFirstInput(true))
            }
        }

    }, [minValue, maxValue])

    function updateButtonStatus() {
        if (count === maxValue) {
            dispatch(setButtonStates([true, true, false]));
        }
    }

    function comparing() {
        if (minValue !== maxValue && minValue < maxValue && maxValue >= 1 && minValue >= 0) {
            dispatch(setButtonStates([false, true, true]))
        } else {
            dispatch(setButtonStates([true, true, true]))
        }
    }

    const disableButtonOnFocusInput = () => {
        comparing()
        dispatch(setIsVisibleFor1Input(true))
        dispatch(setIsVisibleFor2Input(false))
    }
    const disableButtonOnFocusInput2 = () => {
        comparing()
        dispatch(setIsVisibleFor1Input(false))
        dispatch(setIsVisibleFor2Input(true))
    }
    const showOnBlur = () => {
        dispatch(setIsVisibleFor1Input(false))
        dispatch(setIsVisibleFor2Input(false))
        comparing()
    }

    function increment() {
        if (count < maxValue) {
            dispatch(incrementCount());
        } else {
            dispatch(setButtonStates([true, true, false]))
        }
    }

    function reset() {
        dispatch(setButtonStates([true, false, false]))
        dispatch(setCount(minValue));
    }

    function setMinMaxValues() {
        dispatch(setButtonStates([true, false, false]))
        dispatch(setIsVisibleFor1Input(false))
        dispatch(setIsVisibleFor2Input(false))
        dispatch(setCount(minValue));
    }

    function handleMinValueChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(setButtonStates([false, true, true]))
        dispatch(setMinValue(Number(event.target.value)));
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(setButtonStates([false, true, true]))
        dispatch(setMaxValue(Number(event.target.value)));
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
            <SettingsWrapper buttonStates={buttonStates} handleMinValueChange={handleMinValueChange}
                             isValidFirstInput={isValidFirstInput}
                             handleMaxValueChange={handleMaxValueChange} isValidSecondInput={isValidSecondInput}
                             setMinMaxValues={setMinMaxValues} maxValue={maxValue}
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

export default CounterWithRedux;
