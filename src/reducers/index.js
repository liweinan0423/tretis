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

    function blockHitsSettledCellUnderneath(state) {
        return _.intersectionWith(
                state.settledCells,
                state.filledCells.map(c => {
                    return {row: c.row + 1, column: c.column}
                }),
                _.isEqual
            ).length > 0
    }

    function blockHitsSettledCellOnTheLeft(state) {
        return _.intersectionWith(
                state.settledCells,
                state.filledCells.map(c => {
                    return {row: c.row, column: c.column - 1}
                }),
                _.isEqual
            ).length > 0
    }

    function blockHitsSettledCellOnTheRight(state) {
        return _.intersectionWith(
                state.settledCells,
                state.filledCells.map(c => {
                    return {row: c.row, column: c.column + 1}
                }),
                _.isEqual
            ).length > 0
    }

    switch (action.type) {
        case 'MOVE_DOWN':
            if (blockHitsBottom(state) || blockHitsSettledCellUnderneath(state)) {
                return Object.assign({}, state, {
                    filledCells: [],
                    settledCells: _.concat(state.settledCells, state.filledCells)
                });
            }
            return Object.assign({}, state, {
                filledCells: state.filledCells.map((cell) => {
                    return {row: cell.row + 1, column: cell.column};
                })
            });
        case 'MOVE_RIGHT':
            if (blockHitsRightBoarder(state) || blockHitsSettledCellOnTheRight(state)) {
                return state;
            }
            return Object.assign({}, state, {
                filledCells: state.filledCells.map((cell) => {
                    return {row: cell.row, column: cell.column + 1};
                })
            });
        case 'MOVE_LEFT':
            if (blockHitsLeftBoarder(state) || blockHitsSettledCellOnTheLeft(state)) {
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
