import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ToDo from "./containers/todo/todo";
import Title from "./components/title/title";

const App = () => (
  <>
    <Title title="ToDo App " />
    <ToDo />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
