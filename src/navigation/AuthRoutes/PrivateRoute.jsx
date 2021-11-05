import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const auth = false
    return (
        <Route
            render={({ location }) =>
                auth ? (
                    <>
                        {children}
                        {console.log(location)}
                        <br />
                        <div>This is a protected route</div>
                    </>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}