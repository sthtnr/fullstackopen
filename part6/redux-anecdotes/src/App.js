import React from 'react'
import _ from 'lodash'
import { upVote, createAnec } from './reducers/anecdoteReducer'

const App = props => {
  const anecdotes = props.store.getState()

  const vote = id => {
    // console.log('vote', id)
    props.store.dispatch(upVote(id))
  }

  const addAnec = event => {
    event.preventDefault()
    props.store.dispatch(createAnec(event.target.anec.value))
    event.target.anec.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {_.orderBy(anecdotes, 'votes', 'desc').map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <div>
          <input name="anec" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
