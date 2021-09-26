import './App.css';
import Counter from './components/Counter';
import { Provider } from './scratch-redux/Provider';
import { countReducer } from './reducers/countReducer';
import { createStore } from './scratch-redux/store';
import { combineReducer } from './scratch-redux/combineReducer';

const INITIAL_STATE = { counter: { count: 0 } }

function App() {
  const store = createStore(combineReducer({ counter: countReducer }), INITIAL_STATE)

  return (
    <Provider store={store}><Counter /></Provider>
  );
}

export default App;
