import React, { Component } from 'react'
import Menus from './navbar'
import { array } from 'prop-types'
import { connect } from 'unistore/react'

export const MenuList = connect('menuList')(({ menuList }) => (
  <Menus items={menuList} />
))

class Navbar extends Component {
  static propTypes = {
    menu: array,
  }

  static defaultProps = {
    menu: [],
  }

  render() {
    return <MenuList />
  }
}

export { Navbar }
