import React from 'react'
import { Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from './routePermission'

const LoginManageDomainController = LoadableRoute({
    loader: () => import('../components/features/login/controllers/loginBackendController')
})
export default () => (
    <Switch>
        <PublicRoute path="/login" component={LoginManageDomainController} layout={LayoutLogin} />

    </Switch>
)