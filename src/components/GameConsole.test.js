import React from 'react';
import GameConsole from './GameConsole';
import {shallow} from "enzyme";

describe('Game Console', () => {
    const moveDown = jest.fn();
    const moveLeft = jest.fn();
    const moveRight = jest.fn();
    const props = {moveDown, moveLeft, moveRight};

    const gameConsole = shallow(<GameConsole {...props} />);

    it('should trigger click event if click Down button', () => {
        gameConsole.find('.btn-down').simulate('click');
        expect(moveDown.mock.calls.length).toEqual(1);
    });
    it('should trigger click event if click Left button', () => {
        gameConsole.find('.btn-left').simulate('click');
        expect(moveLeft.mock.calls.length).toEqual(1);
    });
    it('should trigger click event if click Right button', () => {
        gameConsole.find('.btn-right').simulate('click');
        expect(moveRight.mock.calls.length).toEqual(1);
    });
});
