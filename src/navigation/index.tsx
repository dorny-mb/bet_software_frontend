import { FillLoader, SideBar } from 'components'
import { useAuthContext } from 'context/AuthProvider'
import React, { Suspense } from 'react'

import { Redirect, Route, RouteProps, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import PageNotFound from '../containers/PageNotFound'

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes'

interface RouteType extends RouteProps {
  component: any
}

export type NavItem = {
  to: string
  title: string
  icon: React.ReactNode
  subMenu?: Array<{ to: string; title: string }>
}

const PrivateRoute = ({ component: Component, ...rest }: RouteType) => {
  const { isAuthenticating, isAuthenticated } = useAuthContext()

  if (isAuthenticating) {
    return <FillLoader />
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Suspense fallback={<FillLoader color="black" />}>
            <Component {...rest} />
          </Suspense>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

const PublicRoute = ({ component: Component, ...rest }: RouteType) => (
  <Route {...rest}>
    <SideBar>
      <Component />
    </SideBar>
  </Route>
)

const Navigation = (): JSX.Element => (
  <Router>
    <Suspense fallback={<FillLoader />}>
      <Switch>
        {PUBLIC_ROUTES.map((route) => {
          return <PublicRoute key={route.path} {...route} />
        })}
        <Route
          path="/auth"
          render={() => (
            <SideBar>
              {PRIVATE_ROUTES.map((route) => {
                return <PrivateRoute key={route.path} {...route} />
              })}
            </SideBar>
          )}
        />
        <Route render={PageNotFound} />
      </Switch>
    </Suspense>
  </Router>
)

export default Navigation
