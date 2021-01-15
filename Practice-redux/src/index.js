import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import CounterReducer from './Store/reducers/counter';
import ResultReducer from './Store/reducers/result';
import thunk from 'redux-thunk'
import calculations from './Store/reducers/calculation'

// const rootReducer = combineReducers({
//   ctr: CounterReducer,
//   rslt: ResultReducer
// })

// const logger = store =>{   // MiddleWare
//   return next =>{ // Returning function
//     return action =>{ // returning function
//       console.log ('[Middleware] Dispatching', action);
//       const result = next(action); // unmodified action
//       console.log ('[Middleware] next state', store.getState());
//       return result;
//     }
//   }
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(calculations)

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider  store = {store}>  <App />  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
