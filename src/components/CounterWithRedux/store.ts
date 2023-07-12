import {createStore} from 'redux';
import {CounterReducer} from "./CounterReducer";
import {loadState, saveState} from "./localstorage";
import { throttle } from "lodash";

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
    payload?: any;
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

const rootReducer = CounterReducer;

export type RootState = ReturnType<typeof rootReducer>;
const persistedState = loadState();
export const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(
    throttle(() => {
        const currentState: CounterStateType = {
            ...store.getState(),
            minValue: store.getState().minValue,
            maxValue: store.getState().maxValue
        };
        saveState(currentState);
    }, 1000)
);
