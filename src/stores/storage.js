class Storage {
  #key
  constructor(key) {
    this.#key = key
  }

  get storage() {
    const mystorage = { ...window.localStorage }
    Object.assign(mystorage, {
      setItem: (key, values) => {
        return window.localStorage.setItem(key, JSON.stringify(values))
      },
      removeItem: () => window.localStorage.removeItem(this.#key),
      getItem: () =>
        window.localStorage.getItem(this.#key)
          ? JSON.parse(window.localStorage.getItem(this.#key))
          : null,
    })
    return mystorage
  }

  save(values) {
    this.storage.setItem(this.#key, values)
  }

  remove() {
    this.storage.removeItem()
  }

  get() {
    return this.storage.getItem()
  }
}

const mystorage = new Storage('app_state')

export default mystorage
