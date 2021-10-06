import React from 'react'

import { undo as undoAction, redo as redoAction } from 'actions/timeTravel'
import { subFromCounter, addToCounter } from 'actions/counter'
import { useDispatch, useSelector } from 'scratch-redux'
import Counter from './Counter'

const counterSelector = (state) => {
  return {
    count: state.counter.count,
    canUndo: state.counter._timeTravel?.past.length > 0,
    canRedo: state.counter._timeTravel?.future.length > 0
  }
}

const bindDispatch = (dispatch, func) => () => dispatch(func())

const CounterWithHooks = () => {
  const { count, canUndo, canRedo } = useSelector(counterSelector)
  const dispatch = useDispatch()
  const increase = bindDispatch(dispatch, addToCounter)
  const decrease = bindDispatch(dispatch, subFromCounter)
  const undo = bindDispatch(dispatch, undoAction)
  const redo = bindDispatch(dispatch, redoAction)


  return (
    <Counter state={{ count, canUndo, canRedo }} actions={{ increase, decrease, undo, redo }} />
  )
}

export default CounterWithHooks
