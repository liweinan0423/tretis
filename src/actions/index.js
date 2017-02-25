import MoveLeft from "./MoveLeft";
import MoveDown from "./MoveDown";
import MoveRight from "./MoveRight";

const moveDown = () => {
    return MoveDown;
};
const moveRight = () => {
    return MoveRight;
};
const moveLeft = () => {
    return MoveLeft;
};

const nextBlock = () => {
    return {
        type: 'NEXT_BLOCK',
        blockType: 'square'
    };
};

export default {
    moveDown,
    moveRight,
    moveLeft,
    nextBlock
}
