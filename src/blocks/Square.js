class Square {

    type = 'square';

    position = {};

    constructor(row, column) {
        this.position.row = row;
        this.position.column = column
    }

    activeCells() {
        const activeCells = [];
        activeCells.push({row: this.position.row, column: this.position.column});
        activeCells.push({row: this.position.row + 1, column: this.position.column});
        activeCells.push({row: this.position.row, column: this.position.column + 1});
        activeCells.push({row: this.position.row + 1, column: this.position.column + 1});
        return activeCells;
    }

    hitsRightBorder(board) {
        return this.position.column + 2 > board.width - 1
    }

    hitsBottom(board) {
        return this.position.row + 2 > board.height - 1;
    }

    hitsLeftBorder() {
        return this.position.column - 1 < 0;
    }

}

module.exports = {
    Square
};
