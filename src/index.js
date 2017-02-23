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
    filledCells: [
        {row: 0, column: 0},
        {row: 0, column: 1},
        {row: 1, column: 0},
        {row: 1, column: 1},
    ],
    settledCells: [
        { row: 19, column: 0},
        { row: 19, column: 1},
        { row: 18, column: 0},
        { row: 18, column: 1}
    ]
};

const initialState2 = {
    board: {
        width: 10,
        height: 20
    },
    filledCells: [
        {row: 16, column: 2},
        {row: 16, column: 3},
        {row: 17, column: 2},
        {row: 17, column: 3}
    ],
    settledCells: [
        {row: 16, column: 4},
        {row: 16, column: 5},
        {row: 17, column: 4},
        {row: 17, column: 5},
        {row: 18, column: 4},
        {row: 18, column: 5},
        {row: 19, column: 4},
        {row: 19, column: 5},
    ]
};

const store = createStore(reducer, initialState2);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
