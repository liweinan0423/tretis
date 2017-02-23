import MoveLeft from '../actions/MoveLeft';
import MoveDown from '../actions/MoveDown';
import MoveRight from '../actions/MoveRight';

const initialPosition = [
    {row: 0, column: 4},
    {row: 0, column: 5},
    {row: 1, column: 4},
    {row: 1, column: 5}
];

export default (state = {}, action) => {


    switch (action.type) {
        case 'MOVE_DOWN':
            return MoveDown.move(state);
        case 'MOVE_RIGHT':
            return MoveRight.move(state);
        case 'MOVE_LEFT':
            return MoveLeft.move(state);
        case 'NEXT_BLOCK':
            return Object.assign({}, state, {
                filledCells: initialPosition
            });
        default:
            return state;
    }

}
