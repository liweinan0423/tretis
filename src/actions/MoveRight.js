import * as _ from "lodash";

const moveRight = cell => {
    return {row: cell.row, column: cell.column + 1};
};


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

const MoveRight = {
    type: "MOVE_RIGHT",
    move: state => {
        if (blockHitsRightBorder(state) || blockHitsSettledCell(state, moveRight)) {
            return state;
        }
        return Object.assign({}, state, {
            filledCells: state.filledCells.map(moveRight)
        });
    }
};

export default MoveRight;
