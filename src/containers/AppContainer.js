import {connect} from "react-redux";
import App from "../components/App";
import actions from "../actions";
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => {
    return {
        filledCells: state.filledCells,
        settledCells: state.settledCells,
        rows: state.board.height,
        columns: state.board.width
    }
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
