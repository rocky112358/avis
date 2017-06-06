import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import * as propTypes from './propTypes'

import './app.css';


class Provider extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.appState = props.appState;
    }
    getChildContext() {
        return { appState: this.appState };
    }
    render() {
        return React.Children.only(this.props.children);
    }
    static childContextTypes = {
        appState: propTypes.objectIsRequired,
    };
}

export function render(App, appState, target) {
    ReactDOM.render(
        <AppContainer>
            <Provider appState={appState}>
                <App/>
            </Provider>
        </AppContainer>,
        target,
    );
}
