import React from 'react';
import _ from 'lodash';
import Cell from './Cell';

export default class GameBoard extends React.Component {

    static propTypes = {
        columns: React.PropTypes.number.isRequired,
        rows: React.PropTypes.number.isRequired,
        filledCells: React.PropTypes.arrayOf(React.PropTypes.shape({
            row: React.PropTypes.number.isRequired,
            column: React.PropTypes.number.isRequired
        })),
        settledCells: React.PropTypes.arrayOf(React.PropTypes.shape({
            row: React.PropTypes.number.isRequired,
            column: React.PropTypes.number.isRequired
        }))
    };

    render() {
        return (
            <div className="board">
                {this.renderRows()}
            </div>
        );
    }

    renderRows() {
        const rows = [];
        for (let i = 0; i < this.props.rows; i++) {
            rows.push(<div key={i} className="row">{this.renderCells(i)}</div>);
        }
        return rows;
    }

    renderCells(rowNumber) {
        const cells = [];
        for (let columnNumber = 0; columnNumber < this.props.columns; columnNumber++) {
            cells.push(
                <Cell key={columnNumber}
                      rowNumber={rowNumber} columnNumber={columnNumber}
                      filled={this.isCellFilled(rowNumber, columnNumber)}
                      settled={this.isCellSettled(rowNumber, columnNumber)}/>
            );
        }
        return cells;
    }


    isCellSettled(rowNumber, columnNumber) {
        return !!_.find(this.props.settledCells, (cell) => cell.row === rowNumber && cell.column === columnNumber);
    }

    isCellFilled(rowNumber, columnNumber) {
        return !!_.find(this.props.filledCells, (cell) => cell.row === rowNumber && cell.column === columnNumber);
    }
}
