import * as _ from "lodash";

const moveRight = position => {
    return {row: position.row, column: position.column + 1};
};

function blockHitsSettledCell(state, nextPosition) {
    return _.intersectionWith(
            state.settledCells,
            state.activeBlock.activeCells().map(nextPosition),
            _.isEqual
        ).length > 0
}

const MoveRight = {
    type: "MOVE_RIGHT",
    move: state => {
        if (!(state.activeBlock && state.activeBlock.position)) {
            return state;
        } else {
            if (state.activeBlock.hitsRightBorder(state.board) || blockHitsSettledCell(state, moveRight)) {
                return state;
            } else {
                return Object.assign({}, state, {
                    activeBlock: {
                        type: state.activeBlock.type,
                        position: {
                            row: state.activeBlock.position.row,
                            column: state.activeBlock.position.column + 1
                        }
                    }
                });
            }
        }
    }
};

export default MoveRight;
