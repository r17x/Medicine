import React, { PureComponent } from 'react'
/**
 * asyncComponent its a HOC - High Order Component
 * for asynchronously loading component
 * @param {object} importComponent is lazy-load import
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 *
 * @param {string} typeLoading | default null
 * the type of Loading Screen when component on load
 * @return {object}
 *
 *
 * TODO
 * fix memory leak
 */
export const asyncComponent = ({ importComponent, Loading }) => {
  return class getComponent extends PureComponent {
    state = {
      component: null,
      ready: false,
    }

    /**
     * Asynchronous function  componentDidmount
     * @return {void}
     */
    async componentDidMount() {
      this._cmp = await importComponent()
      this._asyncSet = this.setStateAsync({
        component: this._cmp['default'],
        ready: !this.state.ready,
      })
    }

    componentWillUnmount() {
      if (this._asyncSet && 'cancel' in this._asyncSet) this._asyncSet.cancel()
      if (this._cmp && 'cancel' in this._cmp) this._cmp.cancel()
    }

    /**
     * setState as Promise object for
     * Asynchronouse function
     * @return {object} Promise
     * @param  {object} state
     */
    setStateAsync(state) {
      return new Promise(res => {
        this.setState(state, res)
      })
    }

    /**
     * @return {object} Component
     */
    render() {
      const Component = this.state.component
      return Component ? (
        <Component {...this.props} />
      ) : Loading ? (
        <Loading />
      ) : (
        ''
      )
    }
  }
}

export default {
  asyncComponent,
}
