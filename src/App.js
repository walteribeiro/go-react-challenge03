import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';
import store from './store';

const App = () => (
  <Provider store={store}>
    <p>Hello World</p>
  </Provider>
);

export default App;
