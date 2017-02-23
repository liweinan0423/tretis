import React from 'react';

export default class extends React.Component {
    static propTypes = {
        rowNumber: React.PropTypes.number.isRequired,
        columnNumber: React.PropTypes.number.isRequired,
        settled: React.PropTypes.bool,
        filled: React.PropTypes.bool
    };

    render() {
        return (
            <div className={`cell ${this.props.filled ? 'cell--filled' : ''} ${this.props.settled ? 'cell--settled' : ''}`}/>
        );
    }
}
