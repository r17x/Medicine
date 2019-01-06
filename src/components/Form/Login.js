import React, { PureComponent } from 'react'
import Form from 'utils/Form'
import Input from 'antd/lib/input'
// import Upload from 'antd/lib/upload'
// import Icon from 'antd/lib/icon'

// const {Dragger} = Upload

export default class FormLogin extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      fields: [
        {
          id: 'username',
          options: {
            rules: [
              {
                required: true,
              },
            ],
          },
          element: <Input placeholder="Username / Email" />,
        },
        {
          id: 'password',
          options: {
            rules: [
              {
                required: true,
              },
            ],
          },
          element: <Input type="password" placeholder="Password..." />,
        },
      ],
    }
  }

  render() {
    return (
      <Form save={this.props.save} title="Login" fields={this.state.fields} />
    )
  }
}
