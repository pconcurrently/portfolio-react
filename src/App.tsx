import * as React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Sidebar from './components/Layout/Sidebar';
import Portfolio from './components/Portfolio/Portfolio';

import './scss/App.scss';

class App extends React.Component<{}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="page-wrapper">
                <Sidebar />
                <Portfolio />
            </div>
        );
    }
}

export default withRouter(App);
