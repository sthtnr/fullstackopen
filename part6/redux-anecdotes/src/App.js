import React from 'react'
import _ from 'lodash'
import { upVote } from './reducers/anecdoteReducer'
import NewAnec from './components/AnecdoteForm'

const App = props => {
  const anecdotes = props.store.getState()

  const vote = id => {
    // console.log('vote', id)
    props.store.dispatch(upVote(id))
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
      <NewAnec store={props.store} />
    </div>
  )
}

export default App
