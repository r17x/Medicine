import React, { Component } from 'react'
import Layout from 'utils/Layout'
import { TodoList } from 'components/Todo/Connect'

export default class Todo extends Component {
  render() {
    return (
      <Layout>
        <TodoList />
      </Layout>
    )
  }
}
