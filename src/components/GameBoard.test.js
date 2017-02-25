import React from "react";
import {shallow} from "enzyme";
import _ from 'lodash';
import Cell from "./Cell";
import GameBoard from "./GameBoard";
import {Square} from "../blocks/Square";
import {Stick} from "../blocks/Stick";

describe("Game Board", () => {
    let app;
    const settledCells = [{row: 19, column: 0}, {row: 19, column: 1}, {row: 18, column: 0}, {row: 18, column: 1}];

    const square = new Square(0, 0);
    beforeEach(() => {
        app = shallow(<GameBoard rows={20} columns={10}
                                 settledCells={settledCells}
                                 activeBlock={square}/>);
    });
    it('should render cells', () => {
        expect(app.find('.row').length).toBe(20);
        app.find('.row').forEach(row => {
            expect(row.find(Cell).length).toEqual(10);
        })
    });

    it('should render active block', () => {
        app = shallow(<GameBoard rows={20} columns={10}
                                 activeBlock={square}/>);
        const cells = app.find(Cell);
        const activeCells = [];
        cells.forEach((cell) => {
            if (cell.prop('active')) {
                activeCells.push(cell);
            }
        });
        expect(activeCells.length).toBe(4);
        const expectedActiveCells = [
            {
                row: square.position.row,
                column: square.position.column
            },
            {
                row: square.position.row + 1,
                column: square.position.column
            },
            {
                row: square.position.row,
                column: square.position.column + 1
            },
            {
                row: square.position.row + 1,
                column: square.position.column + 1
            }
        ];
        expect(activeCells.map(cell => {
            return {
                row: cell.prop('rowNumber'),
                column: cell.prop('columnNumber')
            }
        })).toEqual(expect.arrayContaining(expectedActiveCells));
    });
    it('should render stick block', () => {
        app = shallow(<GameBoard rows={20} columns={10}
                                 activeBlock={new Stick(0, 0)} />);
        const cells = app.find(Cell);
        const activeCells = [];
        cells.forEach((cell) => {
            if (cell.prop('active')) {
                activeCells.push(cell);
            }
        });
        expect(activeCells.length).toBe(4);
        const expectedActiveCells = [
            {
                row: 0, column: 0
            },
            {
                row: 1, column: 0
            },
            {
                row: 2, column: 0
            },
            {
                row: 3, column: 0
            },
        ];
        expect(activeCells.map(cell => {
            return {
                row: cell.prop('rowNumber'),
                column: cell.prop('columnNumber')
            }
        })).toEqual(expect.arrayContaining(expectedActiveCells));
    });
    it('should not render active block if there is no active block', () => {
        app = shallow(<GameBoard rows={20} columns={10}
                                 settledCells={settledCells}
                                 activeBlock={{}}/>);
        const cells = app.find(Cell);
        const activeCells = [];
        cells.forEach((cell) => {
            if (cell.prop('active')) {
                activeCells.push(cell);
            }
        });
        expect(activeCells.length).toBe(0);
    });

    it('should render settled cells', () => {
        let cells = app.find(Cell);
        const settled = [];
        cells.forEach((cell) => {
            if (cell.prop('settled')) {
                settled.push(cell);
            }
        });
        expect(settled.length).toBe(4);
        settled.forEach((cell) => {
            expect(
                _.find(settledCells, (c) => c.row === cell.prop('rowNumber') && c.column === cell.prop('columnNumber'))
            ).toBeTruthy();
        });
    });
});
