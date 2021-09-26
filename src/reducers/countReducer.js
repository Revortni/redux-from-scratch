export function countReducer(state = {}, action) {
  console.log("Called", state, action)
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 }
    case 'sub':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }

}