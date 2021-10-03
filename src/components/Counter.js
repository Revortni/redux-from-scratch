import React from 'react'
import { connect } from 'scratch-redux'
import { subFromCounter, addToCounter } from 'actions/counter'
import { undo, redo } from 'actions/timeTravel'
import { bindActionCreators } from 'scratch-redux/actionCreator'

const Counter = (props) => {
  const { increase, decrease, count, undo, redo, canUndo, canRedo } = props

  return (
    <div className="container">
      <h1 className='title'>Counter</h1>
      <div className="flex-center">
        <button className="counter-button" onClick={decrease}>-</button>
        <span>{count}</span>
        <button className="counter-button" onClick={increase}>+</button>
      </div>
      <div className="flex-center">
        <button className="counter-button" disabled={!canUndo} onClick={undo}>&lt;</button>
        <h2 className='title'>Time travel</h2>
        <button className="counter-button" disabled={!canRedo} onClick={redo}>&gt;</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    canUndo: state.counter._timeTravel?.past.length > 0,
    canRedo: state.counter._timeTravel?.future.length > 0
  }
}

const mapDispatchToProps = bindActionCreators({
  increase: addToCounter,
  decrease: subFromCounter,
  undo: undo,
  redo: redo
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
