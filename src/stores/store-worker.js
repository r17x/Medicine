import createStore from 'stockroom/worker'
import initState from './initState'
import actions from './action'

const store = createStore(initState)
store.registerActions(actions)

export default store
