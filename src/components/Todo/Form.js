import React, { PureComponent } from 'react'
import { func } from 'prop-types'
import Form from 'utils/Form'
import Input from 'antd/lib/input'

export default class FormTodo extends PureComponent {
  static propTypes = {
    save: func,
  }

  state = {
    fields: [
      {
        id: 'title',
        options: {
          rules: [
            {
              required: true,
            },
          ],
        },
        element: <Input placeholder="Create your Todo..." />,
      },
    ],
  }

  render() {
    return (
      <Form
        save={this.props.save}
        title="Todo"
        fields={this.state.fields}
        hideCancel
      />
    )
  }
}
