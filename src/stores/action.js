import { uniqueArrayObject } from 'utils/object'

/**
 * Generate UUID
 * @url https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  )
}

// Example AUTh
class Users {
  #username
  #password
  #isLogin = false
  constructor(username, password) {
    this.#username = username
    this.#password = password
  }

  login() {
    if (this.#username === 'rin' && this.#password === 'rin') {
      this.#isLogin = true
      this.isLogin = this.getIsLogin()
      this.username = this.getUsername()
      this.loggedIn = new Date()
    }
  }

  getIsLogin() {
    return this.#isLogin
  }

  getUsername() {
    return this.#username
  }
}

const actions = {
  setDrawer({ drawer }) {
    return { drawer: !drawer }
  },

  setMenu({ menuList }, menu) {
    return {
      menuList: Array.isArray(menuList)
        ? uniqueArrayObject(menuList.concat(menu), 'path')
        : menu,
    }
  },

  createTodo({ todos }, todo) {
    todo === Object(todo) &&
      Object.assign(todo, {
        id: guid(),
      })
    todos = Array.isArray(todos) ? todos.concat(todo) : new Array(todo)
    /**
     * don't return like this
     * return { todos }
     */
    return {
      todos: todos,
    }
  },

  deleteTodo({ todos }, currentId) {
    if (!Array.isArray(todos)) return
    return {
      todos: todos.filter((todo, index) => todo.id !== currentId),
    }
  },

  login(state, { username, password }) {
    const user = new Users(username, password)
    user.login()
    return {
      user: user,
    }
  },
}

export default actions
