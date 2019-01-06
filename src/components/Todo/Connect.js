import React from 'react'
import { connect } from 'unistore/react'
import Form from './Form'
import List from './List'

export const Todo = connect(
  [],
  {
    save: 'createTodo',
  },
)(({ save }) => <Form save={save} />)

export const TodoList = connect(
  'todos',
  { handleDelete: 'deleteTodo' },
)(({ todos, handleDelete }) => (
  <List handleDelete={handleDelete} data={todos} />
))
