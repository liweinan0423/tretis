import {Square} from "../blocks/Square";
export default (state = {}, action) => {

    switch (action.type) {
        case 'MOVE_DOWN':
        case 'MOVE_RIGHT':
        case 'MOVE_LEFT':
            return action.move(state);
        case 'NEXT_BLOCK':
            let nextBlock;
            switch (action.blockType) {
                case 'square':
                    nextBlock = new Square(0, 4);
                    break;
                case 'stick':
                    nextBlock = {type: 'stick', position: {row: 0, column: 4}};
                    break;
            }
            return Object.assign({}, state, {
                activeBlock: nextBlock
            });
        default:
            return state;
    }
}
