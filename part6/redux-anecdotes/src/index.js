import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

const style = {
  background:
    'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
}

ReactDOM.render(
  <Provider store={store}>
    <div style={style}>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
