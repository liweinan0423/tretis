class Stick {

    type = 'stick';

    position = {};

    constructor(row, column) {
        this.position.row = row;
        this.position.column = column
    }

    activeCells() {
        const activeCells = [];
        activeCells.push({row: this.position.row, column: this.position.column});
        activeCells.push({row: this.position.row + 1, column: this.position.column});
        activeCells.push({row: this.position.row + 2, column: this.position.column});
        activeCells.push({row: this.position.row + 3, column: this.position.column});
        return activeCells;
    }

    hitsRightBorder(board) {
        return this.position.column + 1 > board.width - 1
    }

    hitsBottom(board) {
        return this.position.row + 4 > board.height - 1;
    }

    hitsLeftBorder() {
        return this.position.column - 1 < 0;
    }
}

module.exports = {
    Stick
};