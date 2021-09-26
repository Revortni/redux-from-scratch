import React from 'react'
import { connect } from 'scratch-redux/connect'

const Counter = (props) => {
  const { increase, decrease, count } = props
  return (
    <div>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
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
