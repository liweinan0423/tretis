const activeCells_square = activeBlock => {
    const activeCells = [];
    activeCells.push({row: activeBlock.position.row, column: activeBlock.position.column});
    activeCells.push({row: activeBlock.position.row + 1, column: activeBlock.position.column});
    activeCells.push({row: activeBlock.position.row, column: activeBlock.position.column + 1});
    activeCells.push({row: activeBlock.position.row + 1, column: activeBlock.position.column + 1});
    return activeCells;
};
const hitsRightBorder_square = function (state) {
    return state.activeBlock.position.column + 2 > state.board.width - 1;
};
var hitsBottom_square = function (state) {
    return state.activeBlock.position.row + 2 > state.board.height - 1;
};

module.exports = {
    activeCells_square,
    hitsBottom_square,
    hitsRightBorder_square
}