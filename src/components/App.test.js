import React from "react";
import App from "./App";
import {shallow} from "enzyme";
import GameConsole from "../containers/GameConsoleContainer";
import GameBoard from "../containers/GameBoardContainer";

describe("Tetris App", () => {
    let app;

    beforeEach(() => {
        app = shallow(<App />);
    });
    it('should render game board', () => {
        expect(app.find(GameBoard).length).toEqual(1);
    });
    it('should render game console', () => {
        expect(app.find(GameConsole).length).toEqual(1);
    });
});
