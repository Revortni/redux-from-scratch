export function combineReducer(reducerMap) {
  return (state = {}, action) => {

    return Object.keys(reducerMap).reduce((acc, key) => {
      const { [key]: keyState } = state
      acc = { ...acc, [key]: reducerMap[key](keyState, action) }

      return acc
    }, {})
  }
}

export function createReducer(initialState, handler) {
  return (state = initialState, action) => {
    if (Object.prototype.hasOwnProperty.call(handler, action.type)) {
      return handler[action.type](state, action)
    }
    return state
  }
}