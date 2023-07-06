import {Reducer} from "redux";
import {CounterStateType, CounterAction, initialState} from "./store";

export const CounterReducer: Reducer<CounterStateType, CounterAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "INCREMENT_COUNT":
            return {...state, count: state.count + 1};
        case "DECREMENT_COUNT":
            return {...state, count: state.count - 1};
        case "RESET_COUNT":
            return {...state, count: 0};
        case "SET_COUNT":
            return {...state, count: action.payload};
        case "SET_MIN_VALUE":
            return {...state, minValue: action.payload};
        case "SET_MAX_VALUE":
            return {...state, maxValue: action.payload};
        case "SET_BUTTON_STATES":
            return {...state, buttonStates: action.payload};
        case "SET_IS_VISIBLE_FOR_1_INPUT":
            return {...state, isVisibleFor1Input: action.payload};
        case "SET_IS_VISIBLE_FOR_2_INPUT":
            return {...state, isVisibleFor2Input: action.payload};
        case "SET_ERROR_MESSAGE":
            return {...state, errorMessage: action.payload};
        case "SET_IS_VALID_FIRST_INPUT":
            return {...state, isValidFirstInput: action.payload};
        case "SET_IS_VALID_SECOND_INPUT":
            return {...state, isValidSecondInput: action.payload};
        default:
            return state;
    }
};