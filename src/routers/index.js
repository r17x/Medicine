import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { config, withSubRoutes } from './routers'
import { MenuList as Menus } from 'components/Navbar'
import Icon from 'antd/lib/icon'
import Layout from 'antd/lib/layout'
import { connect } from 'unistore/react'
const { Header, Content } = Layout

const DrawerMenu = connect(
  'drawer',
  { setDrawer: 'setDrawer' },
)(({ drawer, setDrawer }) => (
  <Icon
    type={(drawer && 'menu-unfold') || 'menu-fold'}
    className="menu-drawer"
    onClick={e => setDrawer()}
  />
))

/**
 * Main Routers Of Application
 * @params {object} props
 * @params {object} store
 * @return {object} Router Element
 */
export const MainRouter = () => {
  return (
    <Router>
      <>
        <Header theme="dark" className="header">
          {<DrawerMenu />}
          <Menus />
        </Header>
        <Content className="content">
          {config.map((route, key) => {
            return route.routes && route.routes.length > 0 ? (
              <withSubRoutes {...route} key={`route:${route.name}:${key}`} />
            ) : (
              <Route key={`route:${route.name}:${key}`} {...route} />
            )
          })}
        </Content>
      </>
    </Router>
  )
}

export default MainRouter
