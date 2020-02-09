import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import ActionButtons from '../components/ActionButtons'

const {store, persistor} = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoInput />
        <TodoList />
        <ActionButtons />
      </PersistGate>
    </Provider>
  );
}

export default App;
