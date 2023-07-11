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
            minValue: state.minValue,
            maxValue: state.maxValue
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