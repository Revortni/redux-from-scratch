export function combineReducer(reducerMap) {
  return (state = {}, action) => {

    return Object.keys(reducerMap).reduce((acc, key) => {
      const { [key]: keyState } = state
      acc = { ...acc, [key]: reducerMap[key](keyState, action) }

      return acc
    }, {})
  }
}