import React from "react"
import { Switch, Route } from "react-router-dom";

import { Dashboard } from "pages/DashBoard";
import { LandingPage } from "pages/LandingPage";
import PrivateRoute  from "./AuthRoutes/PrivateRoute";
import { NotFound } from "./NotFound";
import SignUp from "./AuthRoutes/Signup";
import Login from "./AuthRoutes/Login";
export const RouterConfig = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <Route path='*' component={NotFound} />
            </Switch>
        </>
    )
}