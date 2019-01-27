import { uniqueArrayObject } from 'utils/object'
import guid from 'utils/guid'

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
}

export default actions
