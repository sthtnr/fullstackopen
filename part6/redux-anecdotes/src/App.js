import React from 'react'
import NewAnec from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = props => {
  return (
    <div>
      <AnecdoteList store={props.store} />
      <NewAnec store={props.store} />
    </div>
  )
}

export default App
