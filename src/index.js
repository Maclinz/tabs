import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GloablStyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GloablStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
