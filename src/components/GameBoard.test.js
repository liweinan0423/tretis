import React from "react";
import {shallow} from "enzyme";
import _ from 'lodash';
import Cell from "./Cell";
import GameBoard from "./GameBoard";

describe("Game Board", () => {
    let app;
    const moveDown = jest.fn();
    const moveLeft = jest.fn();
    const moveRight = jest.fn();
    const settledCells = [{row: 19, column: 0}, {row: 19, column: 1}, {row: 18, column: 0}, {row: 18, column: 1}];
    const filledCells = [
        {row: 0, column: 0},
        {row: 0, column: 1},
        {row: 1, column: 0},
        {row: 1, column: 1}
    ];
    beforeEach(() => {
        app = shallow(<GameBoard rows={20} columns={10}
                                 filledCells={filledCells}
                                 moveDown={moveDown} moveLeft={moveLeft} moveRight={moveRight}
                                 settledCells={settledCells}/>);
    });
    it('should render cells', () => {
        expect(app.find('.row').length).toBe(20);
        app.find('.row').forEach(row => {
            expect(row.find(Cell).length).toEqual(10);
        })
    });

    it('should render filled cells', () => {
        const cells = app.find(Cell);
        const filled = [];
        cells.forEach((cell) => {
            if (cell.prop('filled')) {
                filled.push(cell);
            }
        });
        expect(filled.length).toBe(4);
        filled.forEach((cell) => {
            expect(
                _.find(filledCells, (c) => c.row === cell.prop('rowNumber') && c.column == cell.prop('columnNumber'))
            ).toBeTruthy();
        });
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
