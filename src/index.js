import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss';
import reducer from './reducers'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    board: {
        width: 10,
        height: 20
    },
    activeBlock: {
        type: 'stick',
        position: {
            row: 0,
            column: 0
        }
    },
    settledCells: [
        { row: 19, column: 0},
        { row: 19, column: 1},
        { row: 18, column: 0},
        { row: 18, column: 1}
    ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
