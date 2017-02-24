import React from 'react';

export default class Cell extends React.Component {
    static propTypes = {
        rowNumber: React.PropTypes.number.isRequired,
        columnNumber: React.PropTypes.number.isRequired,
        settled: React.PropTypes.bool,
        active: React.PropTypes.bool
    };

    render() {
        return (
            <div className={`cell ${this.props.active ? 'cell--active' : ''} ${this.props.settled ? 'cell--settled' : ''}`}/>
        );
    }
}
