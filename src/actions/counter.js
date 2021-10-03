import { createAction } from "scratch-redux/actionCreator"

const ADD_TO_COUNTER = "ADD_TO_COUNTER"
const SUB_FROM_COUNTER = "SUB_FROM_COUNTER"


export const CounterActions = {
  ADD_TO_COUNTER, SUB_FROM_COUNTER,
}


export const addToCounter = createAction(ADD_TO_COUNTER)
export const subFromCounter = createAction(SUB_FROM_COUNTER)



