import React, { Component } from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import { TodoList } from 'components/Todo/Connect'

export default class TodoListPage extends Component {
  state = {
    sideColumns: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 6 },
      xl: { span: 6 },
    },
    mainColumns: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 18 },
      xl: { span: 18 },
    },
  }
  render() {
    const { sideColumns, mainColumns } = this.state
    return (
      <Row style={{ margin: 13 }} justify="center" gutter={32} type="flex">
        <Col {...sideColumns} />
        <Col {...mainColumns}>
          <TodoList />
        </Col>
      </Row>
    )
  }
}
