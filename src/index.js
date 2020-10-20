import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { ThemeProvider } from './theme/ThemeContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
, document.getElementById('root'));
serviceWorker.unregister();
