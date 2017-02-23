import React from 'react';

export default class GameConsole extends React.Component {
    static propTypes = {
        moveLeft: React.PropTypes.func.isRequired,
        moveDown: React.PropTypes.func.isRequired,
        moveRight: React.PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="controls">
                <button className="btn-left" onClick={() => this.props.moveLeft()}>Left</button>
                <button className="btn-down" onClick={() => this.props.moveDown()}>Down</button>
                <button className="btn-right" onClick={() => this.props.moveRight()}>Right</button>
            </div>
        );
    }
}
