import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Store } from '../../redux/store'
import { User } from '../pages/user/user'

export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          <User/>
          helooooo
        </Provider>
      </div>
    )
  }
}

