import {connect} from "react-redux";
import App from "../components/App";
import actions from "../actions";
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => {
    return {
        filledRows: state.position.filledRows,
        filledCells: state.position.filledCells,
        rows: state.board.height,
        columns: state.board.width
    }
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
