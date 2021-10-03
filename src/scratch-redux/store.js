function getUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const createStore = (reducer, initialState) => {
  const store = {};
  store.state = initialState;
  store.listeners = []; //listeners are an array of functions

  //get store value
  store.getState = () => store.state;

  //subscribe to the store
  store.subscribe = (listener) => {
    const id = getUniqueId()
    store.listeners.push({ id, listener });

    return id
  };

  store.unsubscribe = (listenerId) => {
    const newListenerList = store.listeners.filter(({ id }) => id !== listenerId);
    store.listeners = newListenerList
  };

  //dispatch is a function
  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    console.log({ newState: { ...store.state }, action: action.type })
    store.listeners.forEach(({ listener }) => listener(store.getState()));
  };

  return store;
};