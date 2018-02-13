import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
// --------------------------------------------------

// ==================================================
class CompOne extends Component {

    render() {

        return (
            <div>
                Value One: { this.props.valOne }
            </div>
        );
    }
};
// ==================================================
function mapStateToProps( state ) {
    return {
        valOne: state.value1
    };
}

export default connect( mapStateToProps )( CompOne );