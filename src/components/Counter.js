import React from 'react'

const Counter = (props) => {
  const { state: { count, canUndo, canRedo }, actions: { increase, decrease, undo, redo, } } = props

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

export default Counter