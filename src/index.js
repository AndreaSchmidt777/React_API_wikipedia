import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TodoList from './components/TodoList';
import Wikipedia from './components/Wikipedia';
import Navigation from './components/Navigation';
import WikipediaResults from './components/WikipediaResults';
import Home from './components/Home';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { incrementCounter } from './actions/index';
import counter from './reducers/index';
import './index.css';

import { HashRouter, Route } from 'react-router-dom';

let store = createStore(counter, applyMiddleware(thunkMiddleware));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Navigation />

        <Route exact={true} path="/" component={Home} />
        <Route path="/click" component={App} />
        <Route path="/todo" component={TodoList} />
        <Route path="/wikipedia" component={Wikipedia} />
        <Route path="/wikipedia-results/:search" component={WikipediaResults} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);