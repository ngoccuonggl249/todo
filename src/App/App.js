import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import TodoInput from '../components/TodoInput'

const {store, persistor} = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoInput />
      </PersistGate>
    </Provider>
  );
}

export default App;
