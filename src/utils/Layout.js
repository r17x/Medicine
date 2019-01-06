import React, { PureComponent } from 'react'
import { element } from 'prop-types'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

export default class Layout extends PureComponent {
  static propTypes = {
    left: element,
    right: element,
    children: element.isRequired,
  }

  state = {
    row: {
      style: { margin: 13 },
      justify: 'center',
      gutter: 32,
      type: 'flex',
    },
    sideCol: {
      xs: { span: 12 * 2, order: 2 },
      sm: { span: 12 * 2, order: 2 },
      md: { span: 12 * 2, order: 2 },
      lg: { span: 6 },
      xl: { span: 6 },
    },
    mainCol: {
      xs: { span: 24, order: 1 },
      sm: { span: 24, order: 1 },
      md: { span: 24, order: 1 },
      lg: { span: 6 * 2, order: 2 },
      xl: { span: 6 * 2, order: 2 },
    },
  }
  /**
   * @return {element} React.element
   */
  render() {
    const { row, sideCol, mainCol } = this.state
    return (
      <Row {...row}>
        <Col {...sideCol}>{this.props.left}</Col>
        <Col {...mainCol}>{this.props.children}</Col>
        <Col {...sideCol}>{this.props.right}</Col>
      </Row>
    )
  }
}
