import {connect} from "react-redux";
import actions from "../actions";
import {bindActionCreators} from "redux";
import GameConsole from "../components/GameConsole";

const mapStateToProps = (state) => {
    return state;
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GameConsole);
