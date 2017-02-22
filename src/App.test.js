import React from "react";
import App from "./App";
import {shallow} from "enzyme";

describe("Tetris App", () => {
    let app;
    const moveDown = jest.fn();
    const moveLeft = jest.fn();
    const moveRight = jest.fn();
    beforeEach(() => {
        app = shallow(<App rows={20} columns={10} filledCells={[]} filledRows={[]} moveDown={moveDown} moveLeft={moveLeft} moveRight={moveRight}/>);
    });
    it('should render game board', () => {
        expect(app.find('.row').length).toEqual(20);
        app.find('.row').forEach(row => {
            expect(row.find('.cell').length).toEqual(10);
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
});
