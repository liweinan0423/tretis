import * as _ from "lodash";


const moveLeft = cell => {
    return {row: cell.row, column: cell.column - 1};
};

function blockHitsLeftBorder(state) {
    return _.find(state.filledCells.map(moveLeft), cell => cell.column < 0);
}


function blockHitsSettledCell(state, nextPosition) {
    return _.intersectionWith(
            state.settledCells,
            state.filledCells.map(nextPosition),
            _.isEqual
        ).length > 0
}

const MoveLeft = {
    type: "MOVE_LEFT",
    move: state => {
        if (blockHitsLeftBorder(state) || blockHitsSettledCell(state, moveLeft)) {
            return state;
        }
        return Object.assign({}, state, {
            filledCells: state.filledCells.map(moveLeft)
        });
    }
};

export default MoveLeft;
