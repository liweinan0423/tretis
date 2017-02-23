import React from "react";
import {shallow} from "enzyme";
import Cell from "./Cell";

describe("Cell", () => {
    it('should add style to filled and settled cells', () => {
        let cell = shallow(<Cell rowNumber={1} columnNumber={1} filled={true} settled={true} />);
        expect(cell.hasClass('cell--filled')).toBeTruthy();
        expect(cell.hasClass('cell--settled')).toBeTruthy();
    });
});
