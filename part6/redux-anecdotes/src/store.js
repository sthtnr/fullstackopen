import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecReducer from './reducers/anecdoteReducer'
import notifReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anec: anecReducer,
  notif: notifReducer,
  filter: filterReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
