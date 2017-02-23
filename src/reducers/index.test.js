import reducer from './';
import * as _ from "lodash";

describe('reducer', () => {
    describe('move down', () => {
        it('should move block down on MOVE_DOWN action', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                filledCells: [
                    {row: 0, column: 0},
                    {row: 0, column: 1},
                    {row: 1, column: 0},
                    {row: 1, column: 1}
                ]
            };
            const action = {
                type: 'MOVE_DOWN'
            };
            const nextState = reducer(state, action);
            expect(nextState.filledCells).toEqual([
                {row: 1, column: 0},
                {row: 1, column: 1},
                {row: 2, column: 0},
                {row: 2, column: 1}
            ]);
        });
        it('should settle the cells when block hits bottom', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                filledCells: [
                    {row: 18, column: 0},
                    {row: 18, column: 1},
                    {row: 19, column: 0},
                    {row: 19, column: 1}
                ],
                settledCells: [
                    {row: 18, column: 8},
                    {row: 18, column: 9},
                    {row: 19, column: 8},
                    {row: 19, column: 9},
                ]
            };
            const action = {
                type: 'MOVE_DOWN'
            };

            const nextState = reducer(state, action);
            expect(nextState.filledCells).toEqual([]);
            expect(nextState.settledCells).toEqual(_.concat(state.settledCells, state.filledCells));
        });
    });

    describe('move left', () => {
        it('should move block to left on MOVE_LEFT action', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                filledCells: [
                    {row: 0, column: 4},
                    {row: 0, column: 5},
                    {row: 1, column: 4},
                    {row: 1, column: 5}
                ]
            };
            const action = {
                type: 'MOVE_LEFT'
            };
            const nextState = reducer(state, action);
            expect(nextState.filledCells).toEqual([
                {row: 0, column: 3},
                {row: 0, column: 4},
                {row: 1, column: 3},
                {row: 1, column: 4}
            ]);
        });
        it('should not move block to left if block hists left border', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                filledCells: [
                    {row: 0, column: 0},
                    {row: 0, column: 1},
                    {row: 1, column: 0},
                    {row: 1, column: 1}
                ]
            };
            const action = {
                type: 'MOVE_LEFT'
            };
            let nextState = reducer(state, action);
            expect(nextState).toEqual(state);
        })
    });
    describe('move right', () => {
        it('should move block to right on MOVE_RIGHT action', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                filledCells: [
                    {row: 0, column: 0},
                    {row: 0, column: 1},
                    {row: 1, column: 0},
                    {row: 1, column: 1}
                ]
            };
            const action = {
                type: 'MOVE_RIGHT'
            };
            const nextState = reducer(state, action);
            expect(nextState.filledCells).toEqual([
                {row: 0, column: 1},
                {row: 0, column: 2},
                {row: 1, column: 1},
                {row: 1, column: 2}
            ]);
        });
        it('should not move block to right if block hists right border', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                filledCells: [
                    {row: 0, column: 8},
                    {row: 0, column: 9},
                    {row: 1, column: 8},
                    {row: 1, column: 9}
                ]
            };
            const action = {
                type: 'MOVE_RIGHT'
            };
            let nextState = reducer(state, action);
            expect(nextState).toEqual(state);
        });
    });
    describe('next block', () => {
        it('next block should appear at the initial position', () => {
            const state = {};
            const action = {type: 'NEXT_BLOCK'};
            const nextState = reducer(state, action);
            expect(nextState.filledCells).toEqual([
                {row: 0, column: 4},
                {row: 0, column: 5},
                {row: 1, column: 4},
                {row: 1, column: 5}
            ]);
        });
    });
    it('do nothing on unknown action', () => {
        const state = {};
        const action = {type: "UNKNOWN"};
        const nextState = reducer(state, action);
        expect(nextState).toEqual(state);
    })
});
