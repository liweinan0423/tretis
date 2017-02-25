import * as _ from "lodash";
import {blockHitsSettledCell} from "./commons";

const moveDown = position => {
    return {row: position.row + 1, column: position.column};
};

const MoveDown = {
    type: "MOVE_DOWN",
    move: state => {
        if (!(state.activeBlock && state.activeBlock.position)) {
            return state;
        }
        if (state.activeBlock.hitsBottom(state.board) || blockHitsSettledCell(state, moveDown)) {
            return Object.assign({}, state, {
                activeBlock: {},
                settledCells: _.concat(state.settledCells, state.activeBlock.activeCells())
            });
        } else {
            return Object.assign({}, state, {
                activeBlock: {
                    type: state.activeBlock.type,
                    position: {
                        row: state.activeBlock.position.row + 1,
                        column: state.activeBlock.position.column
                    }
                }
            });
        }
    }
};

export default MoveDown;
