import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getAllCookies, TOKEN, USER_ID, getDeviceAdmin, getIsAdmin } from 'Lib'
import AuthManager from '../business/authManager'

const Auth = {
    isAuthenticated: () => {
        const cookies = getAllCookies()
        let isAuth = false

        if (cookies && cookies[TOKEN] && cookies[USER_ID]) {
            isAuth = true
        }
        return isAuth
    },
    isDevice: () => {
        const isAdmin = getDeviceAdmin()
        return isAdmin.toString() === 'true'
    },
    isAdmin: () => {
        const isAdmin = getIsAdmin()
        return isAdmin.toString() === 'true'
    }
}

const AdminPrivateRoute = ({ component: Component, layout: Layout, staticContext, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (Auth.isAuthenticated() === true && Auth.isAdmin() === false && props.match.url !== '/login') {
                return <Redirect to="/unauthen" />
            }

            if (Layout) {
                return <Layout {...props} Component={Component} />
            } else {
                if (Component !== undefined) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/" />
                }
            }
        }}
    />
)

const DeviceRoute = ({ component: Component, layout: Layout, staticContext, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (Auth.isAuthenticated() === true && Auth.isDevice() === false && props.match.url !== '/deviceLogin') {
                return <Redirect to="/unauthen" />
            }

            if (Layout) {
                return <Layout {...props} Component={Component} />
            } else {
                if (Component !== undefined) {
                    return <Component {...props} />
                }
            }
        }}
    />
)

const PrivateRoute = ({ component: Component, layout: Layout, staticContext, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            const inComingPath = props && props.match && props.match.url
            AuthManager.setUrlIncoming(inComingPath)
            if (Auth.isAuthenticated() === false && props.match.url !== '/login') {
                return <Redirect to="/login" />
            }

            if (Layout) {
                return <Layout {...props} Component={Component} />
            } else {
                if (Component !== undefined) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/" />
                }
            }
        }}
    />
)

const PublicRoute = ({ component: Component, layout: Layout, staticContext, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (Auth.isAuthenticated() === true && props.match.url === '/login') {
                    return <Redirect to="/home" />
                }
                if (props.match.url === '/') {
                    return <Redirect to="/login" />
                }
                if (Layout) {
                    return <Layout {...props} Component={Component} />
                } else {
                    if (Component !== undefined) {
                        return <Component {...props} />
                    } else {
                        return null
                    }
                }
            }}
        />
    )
}

export { PrivateRoute, PublicRoute, DeviceRoute, AdminPrivateRoute, Auth }
