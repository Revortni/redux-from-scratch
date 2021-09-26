import { ReduxContext } from './Provider'
import React, { useState, useEffect } from 'react'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  const Connect = (props) => {
    const { store } = props
    const [state, setState] = useState(store.getState())
    console.log("connect rerendered")
    useEffect(() => {
      store.subscribe((state) => {
        console.log('call subscriber', state)
        setState(state)//to rerender only??
      })
    }, [])

    return (
      <WrappedComponent
        {...props}
        {...mapStateToProps(store.getState())}
        {...mapDispatchToProps(store.dispatch)}
      />
    )
  }

  return (props) => (
    <ReduxContext.Consumer>
      {store => <Connect {...props} store={store} />}
    </ReduxContext.Consumer>
  )

}