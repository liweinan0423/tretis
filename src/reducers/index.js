import * as _ from "lodash";

export default (state = {}, action) => {

    function blockHitsBottom(state) {
        return _.find(state.filledCells, (cell) => cell.row === state.board.height - 1);
    }

    function blockHitsLeftBoarder(state) {
        return _.find(state.filledCells, (cell) => cell.column === 0);
    }

    function blockHitsRightBoarder(state) {
        return _.find(state.filledCells, (cell) => cell.column === state.board.width - 1);
    }

    switch (action.type) {
        case 'MOVE_DOWN':
            if (blockHitsBottom(state)) {
                return state;
            }
            return Object.assign({}, state, {
                filledCells: state.filledCells.map((cell) => {
                    return {row: cell.row + 1, column: cell.column};
                })
            });
        case 'MOVE_RIGHT':
            if (blockHitsRightBoarder(state)) {
                return state;
            }
            return Object.assign({}, state, {
                filledCells: state.filledCells.map((cell) => {
                    return {row: cell.row, column: cell.column + 1};
                })
            });
        case 'MOVE_LEFT':
            if (blockHitsLeftBoarder(state)) {
                return state;
            }
            return Object.assign({}, state, {
                filledCells: state.filledCells.map((cell) => {
                    return {row: cell.row, column: cell.column - 1};
                })
            });

        case 'NEXT_BLOCK':
            return Object.assign({}, state, {
                filledCells: [
                    {row: 0, column: 4},
                    {row: 0, column: 5},
                    {row: 1, column: 4},
                    {row: 1, column: 5}
                ]
            });
        default:
            return state;
    }
}
