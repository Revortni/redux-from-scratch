export const createStore = (reducer, initialState) => {
  const store = {};
  store.state = initialState;
  store.listeners = []; //listeners are an array of functions

  //getState is a function
  store.getState = () => store.state;

  //subscribe is a function
  store.subscribe = (listener) => {
    store.listeners.push(listener);
  };

  //dispatch is a function
  store.dispatch = (action) => {
    console.log({ listeners: store.listeners })
    store.state = reducer(store.state, action);
    store.listeners.forEach(listener => listener(store.getState()));
  };

  return store;
};