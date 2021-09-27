import React from 'react'
import { connect } from 'scratch-redux'

const Counter = (props) => {
  const { increase, decrease, count } = props

  return (
    <div className="container">
      <h1>Counter</h1>
      <div className="flex-center">
        <button className="counter-button" onClick={decrease}>-</button>
        <span>{count}</span>
        <button className="counter-button" onClick={increase}>+</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("mapState", state)
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch({ type: 'add' }),
  decrease: () => dispatch({ type: 'sub' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
