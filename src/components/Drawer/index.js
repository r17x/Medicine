import React, { Component } from 'react'
import { bool, func } from 'prop-types'
import AntDrawer from 'antd/lib/drawer'

export default class Drawer extends Component {
  static defaultProps = {
    visible: false,
    onClose: () => null,
    placement: 'left',
    style: {
      height: 'calc(100% - 55px)',
      overflow: 'auto',
      paddingBottom: 53,
    },
    maskClosable: true,
  }

  static propTypes = {
    visible: bool,
    onClose: func,
  }

  render() {
    return (
      <AntDrawer
        placement={this.props.placement}
        onClose={this.props.onClose}
        maskClosable={this.props.maskClosable}
        visible={this.props.visible}
        style={this.props.style}
      >
        {this.props.children}
      </AntDrawer>
    )
  }
}
