import {createStore, Store} from 'redux';
import {ActionType, CounterReducer, InitialStateType} from "./CounterReducer";

const store: Store<InitialStateType, ActionType>  = createStore(CounterReducer);



export default store;