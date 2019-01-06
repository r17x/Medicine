import React, { Component } from 'react'
import List from 'antd/lib/list'
import { arrayOf, func, string, shape } from 'prop-types'

export default class TodoList extends Component {
  state = {
    data: [],
  }

  static propTypes = {
    data: arrayOf(
      shape({
        title: string.isRequired,
        id: string,
      }),
    ).isRequired,
    handleDelete: func.isRequired,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.data !== prevState.data ? { data: nextProps.data } : null
  }

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={({ id, title, description }, index) => (
          <List.Item
            actions={[
              <span key={index} onClick={e => this.props.handleDelete(id)}>
                Delete
              </span>,
            ]}
          >
            <List.Item.Meta title={title} description={description} />
          </List.Item>
        )}
      />
    )
  }
}
