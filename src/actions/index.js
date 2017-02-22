
const moveDown = () => {
    return {
        type: 'MOVE_DOWN'
    };
};
const moveRight = () => {
    return {
        type: 'MOVE_RIGHT'
    };
};
const moveLeft = () => {
    return {
        type: 'MOVE_LEFT'
    };
};

export default {
    moveDown,
    moveRight,
    moveLeft
}
