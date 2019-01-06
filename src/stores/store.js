import createStore from 'stockroom'
// import createStore from 'unistore'
import StoreWorker from 'worker-loader!./store-worker' // eslint-disable-line import/no-webpack-loader-syntax
// import StoreWorker from 'workerize-loader!./store-worker' // eslint-disable-line import/no-webpack-loader-syntax
import devtools from 'unistore/devtools'
import Storage from './storage'

const {
  //  REACT_APP_USE_WORKER,
  NODE_ENV,
} = process.env

let store

if (NODE_ENV === 'production') {
  store = createStore(new StoreWorker())
  Storage.get() && store.setState(Storage.get(), true)
  store.subscribe(e => {
    Storage.save(e)
  })
} else {
  store = createStore(new StoreWorker())
  Storage.get() && store.setState(Storage.get(), true)
  store.subscribe(e => {
    console.log(e)
    Storage.save(e)
    console.log('has saved in localstorage')
  })
  store = devtools(store)
}

export default store
