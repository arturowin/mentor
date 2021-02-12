import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import useIsLogedIn from "./hooks/useIsLogedIn";

const PrivateRoute = ({component: Component, ...rest}) => {
    const [loggedIn] = useIsLogedIn();
    return (
        <Route
            {...rest}
            render={props => !!loggedIn                ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signup',
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;
