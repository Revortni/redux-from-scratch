import { countReducer } from "reducers/countReducer";
import { combineReducer, createStore } from "scratch-redux";

const INITIAL_STATE = { counter: { count: 0 } }

export const store = createStore(combineReducer({ counter: countReducer }), INITIAL_STATE)