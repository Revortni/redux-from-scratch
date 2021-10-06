import { countReducer } from "reducers/countReducer";
import { undoableReducer } from "reducers/undoReducer";
import { combineReducer, createStore } from "scratch-redux";

const INITIAL_STATE = { counter: { count: 0 } }

export const store = createStore(combineReducer({ counter: undoableReducer(countReducer, 'counter') }), INITIAL_STATE)