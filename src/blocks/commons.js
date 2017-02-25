import * as _ from "lodash";

function blockHitsSettledCell(nextPosition, settledCells, activeBlock) {
    return _.intersectionWith(
            settledCells,
            activeBlock.activeCells().map(nextPosition),
            _.isEqual
        ).length > 0
}

module.exports = {
    blockHitsSettledCell
};
