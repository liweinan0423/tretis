const initialPosition = [
    {row: 0, column: 4},
    {row: 0, column: 5},
    {row: 1, column: 4},
    {row: 1, column: 5}
];

export default (state = {}, action) => {

    switch (action.type) {
        case 'MOVE_DOWN':
        case 'MOVE_RIGHT':
        case 'MOVE_LEFT':
            return action.move(state);
        case 'NEXT_BLOCK':
            return Object.assign({}, state, {
                filledCells: initialPosition
            });
        default:
            return state;
    }
}
