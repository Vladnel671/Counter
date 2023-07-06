import {createStore} from 'redux';
import {CounterReducer} from "./CounterReducer";

export type CounterStateType = {
    count: number;
    minValue: number;
    maxValue: number;
    buttonStates: boolean[];
    isVisibleFor1Input: boolean;
    isVisibleFor2Input: boolean;
    errorMessage: string;
    isValidFirstInput: boolean;
    isValidSecondInput: boolean;
}

export type CounterAction = {
    type: string;
    payload: any;
}

export const initialState: CounterStateType = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    buttonStates: [true, false, false],
    isVisibleFor1Input: false,
    isVisibleFor2Input: false,
    errorMessage: "",
    isValidFirstInput: true,
    isValidSecondInput: true,
};

export const store = createStore(CounterReducer, initialState);


