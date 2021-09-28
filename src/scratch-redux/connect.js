import { ReduxContext } from './Provider'
import React, { useState, useEffect, useRef } from 'react'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  const Connect = (props) => {
    const { store } = props
    const ref = useRef(null)
    const [state, setState] = useState(store.getState())

    useEffect(() => {
      const id = store.subscribe((state) => {
        console.log('call subscriber', state)
        setState(state)//to rerender only??
      })
      ref.current = id

      return () => {
        const id = ref.current
        if (id) {
          store.unsubscribe(id)
        } else {
          console.error('Failed to unsubscribe')
        }
      }
    }, [])
    console.log("listener", { listener: store.listeners, reference: ref.current })


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