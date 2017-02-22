import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/AppContainer';
import './index.scss';
import reducer from './reducers'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    board: {
        width: 10,
        height: 20
    },
    position: {
        filledRows: [0, 1],
        filledCells: [4, 5]
    }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
