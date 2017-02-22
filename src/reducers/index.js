export default (state = {}, action) => {
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
}