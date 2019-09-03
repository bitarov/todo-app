import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ToDo from "./containers/todo/todo";
import Title from "./components/title/title";

const App = () => (
  <>
    <Title title="ToDo App" />
    <ToDo />
  </>
)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
