import React from 'react'
import { Route, Switch } from "react-router-dom";
import { ChatMessages, Signin, Signup } from "./templates";

const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={ChatMessages} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
        </Switch>
    )
}

export default Router