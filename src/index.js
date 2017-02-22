import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore, combineReducers} from 'redux';
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

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'MOVE_DOWN':
            if (state.position.filledRows[state.position.filledRows.length - 1] >= state.board.height - 1) {
                return state;
            } else {
                return Object.assign({}, state, {
                    position: {
                        filledRows: state.position.filledRows.map(i => i + 1),
                        filledCells: state.position.filledCells
                    }
                });
            }
        case 'MOVE_RIGHT':
            if (state.position.filledCells[state.position.filledCells.length - 1] >= state.board.width - 1) {
                return state;
            } else {
                return Object.assign({}, state, {
                    position: {
                        filledRows: state.position.filledRows,
                        filledCells: state.position.filledCells.map(i => i + 1)
                    }
                });
            }
        case 'MOVE_LEFT':
            if (state.position.filledCells[0] === 0) {
                return state;
            } else {
                return Object.assign({}, state, {
                    position: {
                        filledRows: state.position.filledRows,
                        filledCells: state.position.filledCells.map(i => i - 1)
                    }
                });
            }
        default:
            return state;
    }
};


let reducers = combineReducers({
    position: reducer
});

const store = createStore(reducer, initialState);

const mapStateToProps = (state) => {
    return {
        filledRows: state.position.filledRows,
        filledCells: state.position.filledCells,
        rows: state.board.height,
        columns: state.board.width
    }
};

const action = {
    type: 'MOVE_LEFT',
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
