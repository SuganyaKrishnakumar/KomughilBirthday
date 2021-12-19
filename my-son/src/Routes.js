import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Month from "./Components/Month";
import Wishes from "./Components/Wishes";
import welcome from "./Components/Welcome";
import history from './history';
import Main from "./Components/Main";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={welcome} />
                    <Route path="/Wishes" component={Wishes}/>
                    <Route path="/Month" component={Main} />                    
                    
                </Switch>
            </Router>
        )
    }
}