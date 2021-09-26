import React from 'react'

export const ReduxContext = React.createContext("redux")
ReduxContext.displayName = 'ReduxContext'

export const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>
    {children}
  </ReduxContext.Provider>
);