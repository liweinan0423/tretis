import * as _ from "lodash";
import {activeCells_square} from "../blocks/Square";
import {activeCells_stick} from "../blocks/Stick";


const moveLeft = cell => {
    return {row: cell.row, column: cell.column - 1};
};

function blockHitsLeftBorder(state) {
    return state.activeBlock.position.column - 1 < 0;
}


function blockHitsSettledCell(state, nextPosition) {
    let activeCells;
    switch(state.activeBlock.type) {
        case 'square':
            activeCells = activeCells_square(state.activeBlock);
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

const MoveLeft = {
    type: "MOVE_LEFT",
    move: state => {
        if (!(state.activeBlock && state.activeBlock.position)) {
            return state;
        } else {
            if (blockHitsLeftBorder(state) || blockHitsSettledCell(state, moveLeft)) {
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
