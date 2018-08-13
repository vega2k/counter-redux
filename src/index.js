import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

//리덕스 관련 불러오기
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

    //const store = createStore(reducers);

    ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
