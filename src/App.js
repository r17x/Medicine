import React, { Component } from 'react'
import { bool, array, func } from 'prop-types'
import Layout from 'antd/lib/layout'
import MainRouter from 'routers'
import { MenuList } from 'routers/routers'
import Drawer from 'components/Drawer'
import FormLogin from 'components/Form/Login'

import { connect } from 'unistore/react'

/**
 * App is Main component render in Index.js
 */
class App extends Component {
  static propTypes = {
    loading: bool,
    postLoading: bool,
    drawer: bool,
    posts: array,
    categories: array,
    pages: array,
    menuList: array,
    setDrawer: func,
    setMenu: func,
  }

  static defaultProps = {
    loading: true,
    drawer: false,
    menuList: [],
  }

  state = {
    drawer: {},
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return (
      (nextProps.drawer !== prevState.drawer && {
        drawer: {
          visible: nextProps.drawer,
          onClose: e => nextProps.setDrawer(),
        },
      }) ||
      null
    )
  }

  componentDidMount() {
    this.props.setMenu(MenuList)
  }

  render() {
    return (
      <Layout theme="dark">
        <MainRouter />
        <Drawer {...this.state.drawer}>
          {!this.props.user && <FormLogin save={this.props.login} />}
        </Drawer>
      </Layout>
    )
  }
}

export default connect(
  ['drawer', 'menuList', 'user'],
  {
    setMenu: 'setMenu',
    setDrawer: 'setDrawer',
    login: 'login',
  },
)(props => <App {...props} />)
