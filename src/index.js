import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <div>Some text</div>
)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
