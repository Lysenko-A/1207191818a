import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));
