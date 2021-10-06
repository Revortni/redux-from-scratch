import { connect } from 'scratch-redux'
import { subFromCounter, addToCounter } from 'actions/counter'
import { undo, redo } from 'actions/timeTravel'
import { bindActionCreators } from 'scratch-redux/actionCreator'
import Counter from './Counter'

const CounterContainer = (props) => {
  const { increase, decrease, count, undo, redo, canUndo, canRedo } = props

  return <Counter state={{ count, canUndo, canRedo }} actions={{ increase, decrease, undo, redo }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
