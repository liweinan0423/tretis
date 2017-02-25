import {blockHitsSettledCell} from "../blocks/commons";

const moveRight = position => {
    return {row: position.row, column: position.column + 1};
};

const MoveRight = {
    type: "MOVE_RIGHT",
    move: state => {
        if (!(state.activeBlock && state.activeBlock.position)) {
            return state;
        } else {
            if (state.activeBlock.hitsRightBorder(state.board) || blockHitsSettledCell(moveRight, state.settledCells, state.activeBlock)) {
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
