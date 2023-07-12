import {RootState} from "./store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        const state = JSON.parse(serializedState);
        return {
            ...state,
            count: state.minValue,
            buttonStates: [true, false, false],
            isVisibleFor1Input: false,
            isVisibleFor2Input: false,
            errorMessage: "",
            isValidFirstInput: true,
            isValidSecondInput: true,
        };
    } catch (err) {
        return undefined;
    }
};
export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify({
            minValue: state.minValue,
            maxValue: state.maxValue
        });
        localStorage.setItem('state', serializedState);
    } catch {
    }
};