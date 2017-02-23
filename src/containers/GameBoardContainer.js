import {connect} from "react-redux";
import GameBoard from "../components/GameBoard";

const mapStateToProps = (state) => {
    return {
        filledCells: state.filledCells,
        settledCells: state.settledCells,
        rows: state.board.height,
        columns: state.board.width
    }
};

export default connect(mapStateToProps)(GameBoard);
