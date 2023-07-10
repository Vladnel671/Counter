import { CounterAction } from "./store";

export const incrementCount = (): CounterAction => {
    return {
        type: "INCREMENT_COUNT"
    };
};

export const setCount = (count: number): CounterAction => {
    return {
        type: "SET_COUNT",
        payload: count
    };
};

export const setMinValue = (minValue: number): CounterAction => {
    return {
        type: "SET_MIN_VALUE",
        payload: minValue
    };
};

export const setMaxValue = (maxValue: number): CounterAction => {
    return {
        type: "SET_MAX_VALUE",
        payload: maxValue
    };
};

export const setButtonStates = (buttonStates: boolean[]): CounterAction => {
    return {
        type: "SET_BUTTON_STATES",
        payload: buttonStates
    };
};

export const setIsVisibleFor1Input = (isVisible: boolean): CounterAction => {
    return {
        type: "SET_IS_VISIBLE_FOR_1_INPUT",
        payload: isVisible
    };
};

export const setIsVisibleFor2Input = (isVisible: boolean): CounterAction => {
    return {
        type: "SET_IS_VISIBLE_FOR_2_INPUT",
        payload: isVisible
    };
};

export const setErrorMessage = (errorMessage: string): CounterAction => {
    return {
        type: "SET_ERROR_MESSAGE",
        payload: errorMessage
    };
};

export const setIsValidFirstInput = (isValid: boolean): CounterAction => {
    return {
        type: "SET_IS_VALID_FIRST_INPUT",
        payload: isValid
    };
};

export const setIsValidSecondInput = (isValid: boolean): CounterAction => {
    return {
        type: "SET_IS_VALID_SECOND_INPUT",
        payload: isValid
    };
};