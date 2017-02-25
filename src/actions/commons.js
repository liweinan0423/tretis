import * as _ from "lodash";

function blockHitsSettledCell(state, nextPosition) {
    return _.intersectionWith(
            state.settledCells,
            state.activeBlock.activeCells().map(nextPosition),
            _.isEqual
        ).length > 0
}

module.exports = {
    blockHitsSettledCell
};
