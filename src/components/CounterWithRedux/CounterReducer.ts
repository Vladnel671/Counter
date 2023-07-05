import { Reducer } from 'redux';

const INCREMENT_COUNT = "INCREMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"
const RESET_COUNT = "RESET_COUNT"
const SET_COUNT = "SET_COUNT"

export const initialState: InitialStateType = {count: 0};

export type InitialStateType = {
    count: number
}

export type ActionType =
    | { type: typeof INCREMENT_COUNT }
    | { type: typeof DECREMENT_COUNT }
    | { type: typeof RESET_COUNT }
    | { type: typeof  SET_COUNT, payload: number }

// Action creators
export const incrementCountAC = (): ActionType => ({type: INCREMENT_COUNT});
export const decrementCountAC = (): ActionType => ({type: DECREMENT_COUNT});
export const resetCountAC = (): ActionType => ({type: RESET_COUNT});
export const setCountAC = (newCount: number): ActionType => ({type: SET_COUNT, payload: newCount});

export const CounterReducer: Reducer<InitialStateType, ActionType> = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET_COUNT:
            return {
                ...state,
                count: 0
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}