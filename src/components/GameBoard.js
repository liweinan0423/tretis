import React from 'react';
import _ from 'lodash';
import Cell from './Cell';
import {activeCells_square} from "../blocks/Square";
import {activeCells_stick} from "../blocks/Stick";

export default class GameBoard extends React.Component {

    static propTypes = {
        columns: React.PropTypes.number.isRequired,
        rows: React.PropTypes.number.isRequired,
        settledCells: React.PropTypes.arrayOf(React.PropTypes.shape({
            row: React.PropTypes.number.isRequired,
            column: React.PropTypes.number.isRequired
        })),
        activeBlock: React.PropTypes.shape({
            type: React.PropTypes.string,
            position: React.PropTypes.shape({
                row: React.PropTypes.number,
                column: React.PropTypes.number
            })
        })
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
                      active={this.isCellActive(rowNumber, columnNumber)}
                      settled={this.isCellSettled(rowNumber, columnNumber)}/>
            );
        }
        return cells;
    }


    isCellSettled(rowNumber, columnNumber) {
        return !!_.find(this.props.settledCells, (cell) => cell.row === rowNumber && cell.column === columnNumber);
    }

    isCellActive(rowNumber, columnNumber) {
        if (!(this.props.activeBlock && this.props.activeBlock.position)) {
            return false;
        }
        return !!_.find(this.props.activeBlock.activeCells(), cell => cell.row === rowNumber && cell.column == columnNumber);
    }
}
