// src/ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from './firebase';

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
    const user = auth.currentUser;

    return (
        <Route
            {...rest}
            render={props =>
                user && user.role === role ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;