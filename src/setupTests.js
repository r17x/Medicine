import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import * as Enzyme from 'enzyme'
import * as rtl from 'react-testing-library'
import { createSerializer } from 'enzyme-to-json'

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

Enzyme.configure({ adapter: new Adapter() })

global.React = React
global.Enzyme = Enzyme
global.shallow = Enzyme.shallow
global.renderEnzyme = Enzyme.render
global.render = rtl.render
global.cleanup = rtl.cleanup
global.fireEvent = rtl.fireEvent
global.waitForElement = rtl.waitForElement
global.mount = Enzyme.mount
