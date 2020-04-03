import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecReducer from './reducers/anecdoteReducer'
import notifReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  anec: anecReducer,
  notif: notifReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
