import { Home } from 'pages'
import { Todo } from 'pages'
// import {lazy} from 'react'
// const Home = lazy(() => import('pages/Home'))
// const Report = lazy(() => import('pages/Report'))

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    exact: true,
    icon: '',
  },
  {
    name: 'todo',
    path: '/todo',
    component: Todo,
    exact: true,
    icon: '',
  },
  {
    name: '',
    path: '/report/:slug',
    component: Todo,
    exact: true,
    icon: '',
  },
]
