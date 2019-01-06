import React from 'react'
import { storiesOf } from '@storybook/react'
import { Home, Todo } from 'pages'

const storiesPath = 'pages'

storiesOf(storiesPath, module)
  .add('Home', () => <Home />)
  .add('Todo', () => <Todo />)
