import * as _ from "lodash";

const moveDown = cell => {
    return {row: cell.row + 1, column: cell.column};
};

function blockHitsBottom(state) {
    return _.find(state.filledCells.map(moveDown), cell => cell.row > state.board.height - 1);
}

function blockHitsSettledCell(state, nextPosition) {
    return _.intersectionWith(
            state.settledCells,
            state.filledCells.map(nextPosition),
            _.isEqual
        ).length > 0
}

const MoveDown = {
    type: "MOVE_DOWN",
    move: state => {
        if (blockHitsBottom(state) || blockHitsSettledCell(state, moveDown)) {
            return Object.assign({}, state, {
                filledCells: [],
                settledCells: _.concat(state.settledCells, state.filledCells)
            });
        }
        return Object.assign({}, state, {
            filledCells: state.filledCells.map(moveDown)
        });
    }
};

export default MoveDown;
