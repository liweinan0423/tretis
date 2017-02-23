import React from "react";
import App from "./App";
import {shallow} from "enzyme";
import _ from 'lodash';
import Cell from "./Cell";

describe("Tetris App", () => {
    let app;
    const moveDown = jest.fn();
    const moveLeft = jest.fn();
    const moveRight = jest.fn();
    const settledCells = [{row: 19, column: 0}, {row: 19, column: 1}, {row: 18, column: 0}, {row: 18, column: 1}];
    beforeEach(() => {
        app = shallow(<App rows={20} columns={10}
                           filledCells={[]}
                           moveDown={moveDown} moveLeft={moveLeft} moveRight={moveRight}
                           settledCells={settledCells}/>);
    });
    it('should render game board', () => {
        expect(app.find('.row').length).toEqual(20);
        app.find('.row').forEach(row => {
            expect(row.find(Cell).length).toEqual(10);
        })
    });
    it('should trigger click event if click Down button', () => {
        app.find('.btn-down').simulate('click');
        expect(moveDown.mock.calls.length).toEqual(1);
    });
    it('should trigger click event if click Left button', () => {
        app.find('.btn-left').simulate('click');
        expect(moveLeft.mock.calls.length).toEqual(1);
    });
    it('should trigger click event if click Right button', () => {
        app.find('.btn-right').simulate('click');
        expect(moveRight.mock.calls.length).toEqual(1);
    });
    it('should render settled blocks', () => {
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
