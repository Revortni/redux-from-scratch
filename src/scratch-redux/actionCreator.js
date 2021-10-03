export function createAction(type) {
  return (payload) => ({
    type,
    payload
  })
}

export function bindActionCreator(action, dispatch) {
  return (props) => dispatch(action(props))
}

export function bindActionCreators(mapDispatchToProps) {
  return (dispatch) => {
    const map = Object.keys(mapDispatchToProps).reduce((acc, key) => {
      const action = mapDispatchToProps[key]
      acc = { ...acc, [key]: (props) => dispatch(action(props)) }

      return acc
    }, {})

    return map
  }
}