import React, {Component} from "react";
import Cell from './Cell';
import "./App.css";
import _ from "lodash";


class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="board">
                    {this.renderRows()}
                </div>
                <div className="controls">
                    <button className="btn-left" onClick={() => this.props.moveLeft()}>Left</button>
                    <button className="btn-down" onClick={() => this.props.moveDown()}>Down</button>
                    <button className="btn-right" onClick={() => this.props.moveRight()}>Right</button>
                </div>
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

App.propTypes = {
    columns: React.PropTypes.number.isRequired,
    rows: React.PropTypes.number.isRequired,
    moveDown: React.PropTypes.func.isRequired,
    moveLeft: React.PropTypes.func.isRequired,
    moveRight: React.PropTypes.func.isRequired,
    filledCells: React.PropTypes.arrayOf(React.PropTypes.shape({
        row: React.PropTypes.number.isRequired,
        column: React.PropTypes.number.isRequired
    })),
    settledCells: React.PropTypes.arrayOf(React.PropTypes.shape({
        row: React.PropTypes.number.isRequired,
        column: React.PropTypes.number.isRequired
    }))
};

export default App;
