import * as arrayUtil from 'utils/array'

export function undoableReducer(reducer) {
  const initialState = {
    past: [],
    present: undefined,
    future: []
  }

  return function (state, action) {
    const { _timeTravel: { past, present = state, future } = initialState } = state

    switch (action.type) {
      case 'UNDO':
        const previous = past[past.length - 1]
        const newPast = arrayUtil.removeItem(past, past.length - 1)

        return {
          ...previous,
          _timeTravel: {
            past: newPast,
            present: previous,
            future: [present, ...future]
          }
        }
      case 'REDO':
        const [next, ...rest] = future

        return {
          ...next,
          _timeTravel: {
            past: [...past, present],
            present: next,
            future: rest
          }
        }
      default:
        // pass action to reducer
        const newPresent = reducer(present, action)
        if (present === newPresent) {
          return state
        }
        return {
          ...newPresent,
          _timeTravel: {
            past: [...past, present],
            present: newPresent,
            future: []
          }
        }
    }
  }
}