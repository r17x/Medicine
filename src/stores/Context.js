import React, { createContext, PureComponent } from 'react'

const AppContext = createContext()

export default AppContext
export const Provider = AppContext.Provider
export const withContext = Components =>
  class withContext extends PureComponent {
    /**
     * @return {object} ContextAPI.Consumer in Children Component
     */
    render() {
      return (
        <AppContext.Consumer>
          {data => <Components {...data} />}
        </AppContext.Consumer>
      )
    }
  }
