
const activeCells_stick = activeBlock => {
    const activeCells = [];
    activeCells.push({row: activeBlock.position.row, column: activeBlock.position.column});
    activeCells.push({row: activeBlock.position.row + 1, column: activeBlock.position.column});
    activeCells.push({row: activeBlock.position.row + 2, column: activeBlock.position.column});
    activeCells.push({row: activeBlock.position.row + 3, column: activeBlock.position.column});
    return activeCells;

};

const hitsRightBorder_stick = function (state) {
    return state.activeBlock.position.column + 1 > state.board.width - 1;
};


var hitsBottom_stick = function (state) {
    return state.activeBlock.position.row + 4 > state.board.height - 1;
};

module.exports = {
    activeCells_stick,
    hitsRightBorder_stick,
    hitsBottom_stick
};