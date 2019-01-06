import React from 'react'
import Form from '../Form'

describe('Form', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Form debug />)
    expect(component).toMatchSnapshot()
    component.unmount()
  })

  it('Form mount with no error', () => {
    const component = mount(<Form />)
    component.unmount()
  })
})
