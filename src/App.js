import { useState } from 'react'
import { Provider } from 'scratch-redux';
import { store } from 'store';
import { Tab } from 'components/Tab';
import CounterContainer from 'components/CounterContainer';
import CounterWithHooks from 'components/CounterWithHooks';

function App() {
  const [show, setShow] = useState(true)
  const [selected, setSelected] = useState(0)
  const components = [<CounterContainer />, <CounterWithHooks />]
  const options = ['Connect', 'Hooks']
  const tabOptions = options.map((label, index) =>
    <Tab
      key={label}
      label={label}
      selected={selected === index}
      onClick={() => changeSelectedComponent(index)}
    />)

  function changeSelectedComponent(index) {
    if (index === selected) {
      return
    }

    setSelected(index)
  }

  return (
    <Provider store={store}>
      <button onClick={() => setShow(!show)}>toggle</button>
      <div className="tab__container">
        <div className="tab__button-container">
          {tabOptions}
        </div>
        <div>{show && components[selected]}</div>
      </div>
    </Provider>
  );
}

export default App;
