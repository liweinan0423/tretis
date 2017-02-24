export default (state = {}, action) => {

    switch (action.type) {
        case 'MOVE_DOWN':
        case 'MOVE_RIGHT':
        case 'MOVE_LEFT':
            return action.move(state);
        case 'NEXT_BLOCK':
            return Object.assign({}, state, {
                activeBlock: {
                    type: 'stick',
                    position: {
                        row: 0,
                        column: 4
                    }
                }
            });
        default:
            return state;
    }
}
