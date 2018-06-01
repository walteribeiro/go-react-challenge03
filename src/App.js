import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux';
import './config/reactotron';
import store from './store';
import Main from './pages/main';

import './styles/global';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
