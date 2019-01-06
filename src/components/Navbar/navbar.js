import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { array } from 'prop-types'
import { ucword } from 'utils'
import { Menu, Icon } from 'antd'

// const {PUBLIC_URL} = process.env

export default class Menus extends Component {
  static propTypes = {
    items: array.isRequired,
  }

  static defaultProps = {
    items: [
      {
        path: '/',
        name: 'Home',
        routes: [{ path: 'hello', name: 'hello' }],
      },
    ],
  }

  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['menu:item:1']}
      >
        {this.props.items.map(({ name, icon, path }, key) => {
          return (
            <Menu.Item key={`menu:item:${key + 1}`}>
              {icon && icon !== '' && <Icon theme="filled" type={icon} />}
              <Link to={path}>{ucword(name)}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
}
