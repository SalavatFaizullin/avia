/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore } from 'redux'
import reducer from './redux/reducers'
import { Provider } from 'react-redux'

import './index.scss'
import App from './components/app'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
