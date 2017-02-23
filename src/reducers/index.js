import * as _ from "lodash";

const initialPosition = [
    {row: 0, column: 4},
    {row: 0, column: 5},
    {row: 1, column: 4},
    {row: 1, column: 5}
];

export default (state = {}, action) => {

    const moveDown = cell => {
        return {row: cell.row + 1, column: cell.column};
    };
    const moveLeft = cell => {
        return {row: cell.row, column: cell.column - 1};
    };
    const moveRight = cell => {
        return {row: cell.row, column: cell.column + 1};
    };

    function blockHitsBottom(state) {
        return _.find(state.filledCells.map(moveDown), cell => cell.row > state.board.height - 1);
    }

    function blockHitsLeftBorder(state) {
        return _.find(state.filledCells.map(moveLeft), cell => cell.column < 0);
    }

    function blockHitsRightBorder(state) {
        return _.find(state.filledCells.map(moveRight), cell => cell.column > state.board.width - 1);
    }

    function blockHitsSettledCell(state, nextPosition) {
        return _.intersectionWith(
                state.settledCells,
                state.filledCells.map(nextPosition),
                _.isEqual
            ).length > 0
    }

    switch (action.type) {
        case 'MOVE_DOWN':
            if (blockHitsBottom(state) || blockHitsSettledCell(state, moveDown)) {
                return Object.assign({}, state, {
                    filledCells: [],
                    settledCells: _.concat(state.settledCells, state.filledCells)
                });
            }
            return Object.assign({}, state, {
                filledCells: state.filledCells.map(moveDown)
            });
        case 'MOVE_RIGHT':
            if (blockHitsRightBorder(state) || blockHitsSettledCell(state, moveRight)) {
                return state;
            }
            return Object.assign({}, state, {
                filledCells: state.filledCells.map(moveRight)
            });
        case 'MOVE_LEFT':
            if (blockHitsLeftBorder(state) || blockHitsSettledCell(state, moveLeft)) {
                return state;
            }
            return Object.assign({}, state, {
                filledCells: state.filledCells.map(moveLeft)
            });

        case 'NEXT_BLOCK':
            return Object.assign({}, state, {
                filledCells: initialPosition
            });
        default:
            return state;
    }

}
