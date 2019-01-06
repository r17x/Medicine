import React, { Suspense, lazy } from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'
// import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'unistore/react'
import store from 'stores/store'
const Footer = lazy(() => import('components/Footer'))
const App = lazy(() => import('./App'))

/**
 * Another Way React Renderring
 * @author ri7nz <ri7nz.labs@gmail.com>
 */
const elementRendered = [
  {
    id: 'app',
    element: (
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Provider>
    ),
  },
  {
    id: 'footer',
    element: (
      <Suspense fallback={<div>{''}</div>}>
        <Footer />
      </Suspense>
    ),
  },
  // {
  //  id: 'app',
  //  element: (
  //    <div>Header</div>
  //  ),
  // },
]

elementRendered.forEach(element => {
  const DOMElement = document.createElement('div')
  DOMElement.setAttribute('id', element.id)
  document.body.appendChild(DOMElement)
  render(element.element, document.getElementById(element.id))
})

registerServiceWorker()
