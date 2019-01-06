import React, { Component } from 'react'
import { Todo, TodoList } from 'components/Todo/Connect'
import Layout from 'utils/Layout'

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Todo />
        <TodoList />
      </Layout>
    )
  }
}
