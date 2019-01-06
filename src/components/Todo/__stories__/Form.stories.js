import React from 'react'
import { storiesOf } from '@storybook/react'
import { Form, List } from 'components/Todo'
import { Todo, TodoList } from 'components/Todo/Connect'

const storiesPath = 'components/Todo'

storiesOf(storiesPath, module)
  .add('Form', () => <Form />)
  .add('List', () => <List />)
  .add('Form with Connect', () => <Todo />)
  .add('TodoList with Connect', () => <TodoList />)
