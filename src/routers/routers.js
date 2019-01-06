import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import config from './config'

/**
 * Navigation Menu config
 * @return {array} object for make menu
 */
const MenuList = config.map(route => {
  return {
    path: route.path,
    name: route.name,
    routes: 'routes' in route ? route.routes : [],
    icon: route.icon,
  }
})

/**
 * Sub Route Component
 * @param {object} route
 * @return {element} react
 */
const withSubRoutes = route => (
  <Fragment>
    <Route path={route.path} component={route.component} />
    {route.routes.map((subroute, key) => (
      <Route {...subroute} key={`${subroute.name}:${key}`} />
    ))}
  </Fragment>
)

export { MenuList, withSubRoutes, config }
