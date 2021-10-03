import { CounterActions } from "actions/counter"
import { createReducer } from "scratch-redux/reducers"


export const countReducer = createReducer([], {
  [CounterActions.ADD_TO_COUNTER]: (state, action) => {
    return { ...state, count: state.count + 1 }
  },
  [CounterActions.SUB_FROM_COUNTER]: (state, action) => {
    return { ...state, count: state.count - 1 }
  }
})