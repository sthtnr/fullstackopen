import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import reducer from './reducers/anecdoteReducer'

const store = createStore(reducer, composeWithDevTools())

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
}

render()
store.subscribe(render)
