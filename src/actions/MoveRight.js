import * as _ from "lodash";
import {hitsRightBorder_square, activeCells_square} from "../blocks/Square";
import {hitsRightBorder_stick, activeCells_stick} from "../blocks/Stick";

const moveRight = position => {
    return {row: position.row, column: position.column + 1};
};

function blockHitsRightBorder(state) {
    switch (state.activeBlock.type) {
        case 'square':
            return state.activeBlock.hitsRightBorder(state.board);
        case 'stick':
            return hitsRightBorder_stick(state);
        default:
            return false;
    }
}

function blockHitsSettledCell(state, nextPosition) {
    let activeCells;
    switch (state.activeBlock.type) {
        case 'square':
            activeCells = state.activeBlock.activeCells();
            break;
        case 'stick':
            activeCells = activeCells_stick(state.activeBlock);
            break;
    }
    return _.intersectionWith(
            state.settledCells,
            activeCells.map(nextPosition),
            _.isEqual
        ).length > 0
}

const MoveRight = {
    type: "MOVE_RIGHT",
    move: state => {
        if (!(state.activeBlock && state.activeBlock.position)) {
            return state;
        } else {
            if (blockHitsRightBorder(state) || blockHitsSettledCell(state, moveRight)) {
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
