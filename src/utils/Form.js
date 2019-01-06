import React, { PureComponent } from 'react'
import { string, array, object, func } from 'prop-types'
import Form from 'antd/lib/form'
import Button from 'antd/lib/button'

const { Item } = Form
export default Form.create()(
  class FormExport extends PureComponent {
    static propTypes = {
      layout: string.isRequired,
      fields: array.isRequired,
      form: object,
      title: string,
      save: func,
      data: object,
      errors: object,
    }

    static defaultProps = {
      layout: 'horizontal',
      fields: [],
      title: '',
      hideCancel: false,
      hideSubmit: false,
      submitText: 'Submit',
    }

    constructor(props) {
      super(props)
      this.renderFields = this.renderFields.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    syncDataWithFields = () => {
      const values = this.props.form.getFieldsValue()
      const { data, errors } = this.props
      Object.keys(values).forEach(key => {
        this.props.form.setFields({
          [key]: {
            value: data[key] || values[key],
            errors:
              errors === Object(errors) && key in errors
                ? [new Error(errors[key])]
                : undefined,
          },
        })
      })
    }

    renderFields({ id, options, element }) {
      return (
        <Item key={id}>
          {this.props.form.getFieldDecorator(id, options)(element)}
        </Item>
      )
    }

    validateFields = (err, values) => {
      if (err) return
      console.log(values)
      this.props.save(values)
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.form.validateFields(this.validateFields)
    }

    handleCancel = e => {
      e.preventDefault()
      this.props.form.resetFields()
    }

    render() {
      return (
        <Form
          style={{ width: '100%' }}
          layout={this.props.layout}
          onSubmit={this.handleSubmit}
        >
          <h2> {this.props.title} </h2>
          {this.props.fields.map(this.renderFields)}
          <Item>
            {!this.props.hideSubmit && (
              <Button type="primary" htmlType="submit">
                {this.props.submitText}
              </Button>
            )}
            {'   '}
            {!this.props.hideCancel && (
              <Button onClick={this.handleCancel}>Cancel</Button>
            )}
          </Item>
        </Form>
      )
    }
  },
)
