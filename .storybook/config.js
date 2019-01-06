import { configure } from '@storybook/react'
import 'antd/dist/antd.css'
import 'index.css'

const req = require.context('../src', true, /\/__stories__\/.+\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
