/**
 * Auth Class
 * @example
 *    const user = new Users(username, password)
 *    user.login()
 */
export default class Users {
  /* Private Property */
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
