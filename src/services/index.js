/* global axios */
// error import axios, for use axios 
// use importScripts in worker
// import axios from 'axios'
// import wpapi from 'wpapi'
// @var {string} process.env.REACT_APP_API set on .env .env.*
axios.defaults.baseURL = process.env.REACT_APP_API

const Compile = obj => {
  obj = Object.keys(obj).map(key => {
    return `${key}=${obj[key]}`
  })

  return `?${obj.join('&')}`
}

export default class Service {
  async getServices() {
    try {
      const { data } = await axios.get('/')
      this.endpoint = data.routes
    } catch (e) {
      throw e
    }
  }

  static async getPosts(args = { per_page: 10, page: 1 }) {
    if (Object.keys(args).length > 0) {
      args = Compile(args)
    } else args = ''
    try {
      const { data } = await axios.get(`/wp/v2/posts${args}`)
      return data
    } catch (e) {
      throw e
    }
  }

  static async getCategories() {
    try {
      const { data } = await axios.get('/wp/v2/categories')
      return data
    } catch (e) {
      throw e
    }
  }

  static async getPages() {
    try {
      const { data } = await axios.get('/wp/v2/pages')
      return data
    } catch (e) {
      throw e
    }
  }
}
