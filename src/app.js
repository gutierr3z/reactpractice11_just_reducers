import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// --------------------------------------------------
import Index from './components/comp_index';
import Reducers from './reducers/reducer_index';
// ==================================================
class App extends Component {

    render() {

        return (
            <Provider store = { createStore( Reducers ) }>
                <Index />
            </Provider>
        );
    }
};
// ==================================================
ReactDom.render( <App />, document.querySelector( '#main' ) );



