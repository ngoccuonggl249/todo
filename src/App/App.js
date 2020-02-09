import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import ViewModeButtons from '../components/ViewModeButtons'

import style from './assets/App.module.scss'

const {store, persistor} = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={style.app__container}>
          <TodoInput />
          <TodoList />
          <ViewModeButtons />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
