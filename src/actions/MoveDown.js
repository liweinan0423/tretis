import * as _ from "lodash";
import {hitsBottom_square, activeCells_square} from "../blocks/Square";
import {hitsBottom_stick, activeCells_stick} from "../blocks/Stick";

const moveDown = position => {
    return {row: position.row + 1, column: position.column};
};

function blockHitsBottom(state) {
    switch (state.activeBlock.type) {
        case 'square':
            return hitsBottom_square(state);
        case 'stick':
            return hitsBottom_stick(state);

    }
}

function blockHitsSettledCell(state, nextPosition) {
    let activeCells;
    switch (state.activeBlock.type) {
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

const MoveDown = {
    type: "MOVE_DOWN",
    move: state => {
        if (!(state.activeBlock && state.activeBlock.position)) {
            return state;
        }
        if (blockHitsBottom(state) || blockHitsSettledCell(state, moveDown)) {
            let activeCells;
            switch (state.activeBlock.type) {
                case 'square':
                    activeCells = activeCells_square(state.activeBlock);
                    break;
                case 'stick':
                    activeCells = activeCells_stick(state.activeBlock);
                    break;
            }
            return Object.assign({}, state, {
                activeBlock: {},
                settledCells: _.concat(state.settledCells, activeCells)
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
