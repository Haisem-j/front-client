import React from "react"
import { Switch, Route } from "react-router-dom";

import { Dashboard } from "pages/DashBoard";
import { LandingPage } from "pages/LandingPage";
import { Login } from 'navigation/AuthRoutes/Login'
import { AUTH_PAGE1 } from "./CONSTANTS";
import { PrivateRoute } from "./AuthRoutes/PrivateRoute";
import { NotFound } from "./NotFound";

export const RouterConfig = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/dashboard' >
                    <Dashboard />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>

                <PrivateRoute path={AUTH_PAGE1}>
                        {/* Protected routes go here */}
                </PrivateRoute>

                <Route path='*' component={NotFound}/>
            </Switch>
        </>
    )
}