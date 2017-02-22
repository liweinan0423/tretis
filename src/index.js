import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import reducer from './reducers'
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        filledRows: state.position.filledRows,
        filledCells: state.position.filledCells,
        rows: state.board.height,
        columns: state.board.width
    }
};

const moveDownAction = () => {
    return {
        type: 'MOVE_DOWN'
    };
};
const moveRightAction = () => {
    return {
        type: 'MOVE_RIGHT'
    };
};
const moveLeftAction = () => {
    return {
        type: 'MOVE_LEFT'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveDown: () => {
            dispatch(moveDownAction());
        },
        moveRight: () => {
            dispatch(moveRightAction());
        },
        moveLeft: () => {
            dispatch(moveLeftAction());
        }
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root')
);
