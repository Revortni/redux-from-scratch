import { useState } from 'react'
import Counter from 'components/Counter';
import { Provider } from 'scratch-redux';
import { store } from 'store';

function App() {
  const [show, setShow] = useState(true)

  return (
    <Provider store={store}>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Counter />}
    </Provider>
  );
}

export default App;
