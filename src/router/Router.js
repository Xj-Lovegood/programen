import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import App from '../App';
import Home from '../modules/Home';

class Router extends Component {

    render() {
        return(
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </App>
        )
    }
}

export default Router;