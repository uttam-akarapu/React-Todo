import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notes extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div className="note" onClick={this.props.deleteNote}>
                {this.props.text}
            </div>
        );
    }
}

Notes.propTypes = {

};

export default Notes;