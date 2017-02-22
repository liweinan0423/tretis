import reducer from './';

describe('reducer', () => {
    describe('move down', () => {
        it('should move block down on MOVE_DOWN action', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                position: {
                    filledRows: [0, 1],
                    filledCells: [0, 1]
                }
            };
            const action = {
                type: 'MOVE_DOWN'
            };
            const nextState = reducer(state, action);
            expect(nextState.position.filledRows).toEqual([1, 2]);
            expect(nextState.position.filledCells).toEqual(state.position.filledCells);
        });
        it('should not move block down on MOVE_DOWN if block hists the bottom', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                position: {
                    filledRows: [18, 19],
                    filledCells: [0, 1]
                }
            };
            const action = {
                type: 'MOVE_DOWN'
            };

            const nextState = reducer(state, action);
            expect(nextState).toEqual(state);
        });
    });

    describe('move left', () => {
        it('should move block to left on MOVE_LEFT action', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                position: {
                    filledRows: [0, 1],
                    filledCells: [4, 5]
                }
            };
            const action = {
                type: 'MOVE_LEFT'
            };
            const nextState = reducer(state, action);
            expect(nextState.position.filledRows).toEqual(state.position.filledRows);
            expect(nextState.position.filledCells).toEqual([3, 4]);
        });
        it('should not move block to left if block hists left border', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                position: {
                    filledRows: [0, 1],
                    filledCells: [0, 1]
                }
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
                position: {
                    filledRows: [0, 1],
                    filledCells: [0, 1]
                }
            };
            const action = {
                type: 'MOVE_RIGHT'
            };
            const nextState = reducer(state, action);
            expect(nextState.position.filledRows).toEqual(state.position.filledRows);
            expect(nextState.position.filledCells).toEqual([1, 2]);
        });
        it('should not move block to right if block hists right border', () => {
            const state = {
                board: {
                    width: 10,
                    height: 20
                },
                position: {
                    filledRows: [0, 1],
                    filledCells: [8, 9]
                }
            };
            const action = {
                type: 'MOVE_RIGHT'
            };
            let nextState = reducer(state, action);
            expect(nextState).toEqual(state);
        })
    });
    it('do nothing on unknown action', () => {
        const state = {};
        const action = {type: "UNKNOWN"};
        const nextState = reducer(state, action);
        expect(nextState).toEqual(state);
    })
});