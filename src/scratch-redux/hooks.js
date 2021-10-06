import { useState, useContext, useEffect, useRef } from 'react'
import { ReduxContext } from "./Provider"

export const useSelector = (selectorFunc) => {
  const store = useContext(ReduxContext)
  const ref = useRef(null)
  const [state, setState] = useState(store.getState())
  useEffect(() => {
    const id = store.subscribe((state) => {
      setState(state)
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

  const selectedState = selectorFunc(state)
  console.log("useSelector", { selectedState })

  return selectedState
}

export const useDispatch = () => {
  const store = useContext(ReduxContext)

  return store.dispatch
}