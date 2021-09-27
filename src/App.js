import Counter from 'components/Counter';
import { Provider } from 'scratch-redux';
import { store } from 'store';

function App() {

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
