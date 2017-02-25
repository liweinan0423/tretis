import * as _ from "lodash";

const moveLeft = cell => {
    return {row: cell.row, column: cell.column - 1};
};

function blockHitsSettledCell(state, nextPosition) {
    return _.intersectionWith(
            state.settledCells,
            state.activeBlock.activeCells().map(nextPosition),
            _.isEqual
        ).length > 0
}

const MoveLeft = {
    type: "MOVE_LEFT",
    move: state => {
        if (!(state.activeBlock && state.activeBlock.position)) {
            return state;
        } else {
            if (state.activeBlock.hitsLeftBorder() || blockHitsSettledCell(state, moveLeft)) {
                return state;
            } else {
                return Object.assign({}, state, {
                    activeBlock: {
                        type: state.activeBlock.type,
                        position: {
                            row: state.activeBlock.position.row,
                            column: state.activeBlock.position.column - 1
                        }
                    }
                });
            }
        }

    }
};

export default MoveLeft;
