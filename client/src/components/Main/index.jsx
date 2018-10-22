import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from "../Login";
import HelloWorld from "../HelloWorld";

class Main extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/welcome" component={HelloWorld}/>
                </Switch>
            </div>
        )
    };
}

export default Main;