import reducer from './';
import * as _ from "lodash";
import MoveLeft from "../actions/MoveLeft";
import MoveDown from "../actions/MoveDown";
import MoveRight from "../actions/MoveRight";
import {Square} from "../blocks/Square";

describe('reducer', () => {
    describe('move down', () => {
        it('should move block down on MOVE_DOWN action', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                activeBlock: new Square(0, 0),
                settledCells: [
                    {row: 16, column: 2},
                    {row: 16, column: 3},
                    {row: 17, column: 2},
                    {row: 17, column: 3},
                    {row: 18, column: 0},
                    {row: 18, column: 1},
                    {row: 19, column: 0},
                    {row: 19, column: 1}
                ]
            };
            const nextState = reducer(state, MoveDown);
            expect(nextState.activeBlock).toEqual({
                type: state.activeBlock.type,
                position: {
                    row: state.activeBlock.position.row + 1,
                    column: state.activeBlock.position.column
                }
            });
        });
        it('should settle the cells when block hits bottom', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                activeBlock: new Square(18, 0)
            };
            const nextState = reducer(state, MoveDown);
            expect(nextState.activeBlock).toEqual({});
            expect(nextState.settledCells)
                .toEqual(
                    expect.arrayContaining(
                        _.concat(state.settledCells, [
                            {
                                row: state.activeBlock.position.row,
                                column: state.activeBlock.position.column
                            },
                            {
                                row: state.activeBlock.position.row + 1,
                                column: state.activeBlock.position.column
                            },
                            {
                                row: state.activeBlock.position.row,
                                column: state.activeBlock.position.column + 1
                            },
                            {
                                row: state.activeBlock.position.row + 1,
                                column: state.activeBlock.position.column + 1
                            },
                        ])
                    )
                );
        });
        it('should settled the cells if block hits settled cell underneath', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                activeBlock: new Square(16, 0),
                settledCells: [
                    {row: 18, column: 0},
                    {row: 18, column: 1},
                    {row: 19, column: 0},
                    {row: 19, column: 1},
                ]
            };
            const nextState = reducer(state, MoveDown);
            expect(nextState.activeBlock).toEqual({});
            expect(nextState.settledCells)
                .toEqual(
                    expect.arrayContaining(
                        _.concat(state.settledCells, [
                            {
                                row: state.activeBlock.position.row,
                                column: state.activeBlock.position.column
                            },
                            {
                                row: state.activeBlock.position.row + 1,
                                column: state.activeBlock.position.column
                            },
                            {
                                row: state.activeBlock.position.row,
                                column: state.activeBlock.position.column + 1
                            },
                            {
                                row: state.activeBlock.position.row + 1,
                                column: state.activeBlock.position.column + 1
                            },
                        ])
                    )
                );
        });
    });

    describe('move left', () => {
        it('should move block to left on MOVE_LEFT action', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                activeBlock: new Square(0, 2)
            };
            const nextState = reducer(state, MoveLeft);
            expect(nextState.activeBlock).toEqual({
                type: 'square',
                position: {
                    row: 0,
                    column: 1
                }
            });
        });
        it('should not move block to left if block hists left border', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                activeBlock: new Square(0, 0)
            };
            let nextState = reducer(state, MoveLeft);
            expect(nextState).toEqual(state);
        });
        it('should not move block to left if block hits settled cells on the left', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                activeBlock: new Square(16, 2),
                settledCells: [
                    {row: 16, column: 0},
                    {row: 16, column: 1},
                    {row: 17, column: 0},
                    {row: 17, column: 1},
                    {row: 18, column: 0},
                    {row: 18, column: 1},
                    {row: 19, column: 0},
                    {row: 19, column: 1},
                ]
            };
            const nextState = reducer(state, MoveLeft);
            expect(nextState).toEqual(state);
        });

    });
    describe('move right', () => {
        it('should move block to right on MOVE_RIGHT action', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                activeBlock: new Square(0, 0)
            };
            const nextState = reducer(state, MoveRight);
            expect(nextState.activeBlock).toEqual({
                type: 'square',
                position: {
                    row: 0,
                    column: 1
                }
            });
        });
        it('should not move block to right if block hists right border', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                activeBlock: new Square(0, 8)
            };
            let nextState = reducer(state, MoveRight);
            expect(nextState).toEqual(state);
        });
        it('should not move block to right if block hits settled cells on the right', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                activeBlock: new Square(16, 2),
                settledCells: [
                    {row: 16, column: 4},
                    {row: 16, column: 5},
                    {row: 17, column: 4},
                    {row: 17, column: 5},
                    {row: 18, column: 4},
                    {row: 18, column: 5},
                    {row: 19, column: 4},
                    {row: 19, column: 5},
                ]
            };
            const nextState = reducer(state, MoveRight);
            expect(nextState).toEqual(state);
        });
    });
    describe('next block', () => {
        it('next block should appear at the initial position', () => {
            const state = {};
            const action = {type: 'NEXT_BLOCK', blockType: 'square'};
            const nextState = reducer(state, action);
            expect(nextState.activeBlock).toEqual(new Square(0, 4));
        });
    });
    it('do nothing on unknown action', () => {
        const state = {};
        const action = {type: "UNKNOWN"};
        const nextState = reducer(state, action);
        expect(nextState).toEqual(state);
    })
});
