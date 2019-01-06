import React from 'react'
import { string } from 'prop-types'
import Layout from 'antd/lib/layout'
const { Footer } = Layout
const {
  REACT_APP_AUTHOR,
  REACT_APP_NAME,
  REACT_APP_VERSION,
  REACT_APP_CODENAME,
} = process.env

const Footers = props => (
  <Footer style={{ textAlign: 'center' }}>
    <strong>{props.name || REACT_APP_NAME}</strong> Copyright &copy;
    {` ${new Date().getFullYear()} `}
    <span className="pull-right hidden-xs">
      {props.author || REACT_APP_AUTHOR} - v{props.version || REACT_APP_VERSION}{' '}
      [{props.codename || REACT_APP_CODENAME}]
    </span>
  </Footer>
)

Footers.propTypes = {
  name: string,
  version: string,
  codename: string,
  author: string,
}

export default Footers
