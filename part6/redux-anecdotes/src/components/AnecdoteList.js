import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { upVote } from '../actions/anecAction'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anec)
  const dispatch = useDispatch()

  const vote = id => {
    dispatch(upVote(id))
  }

  return (
    <div>
      {_.orderBy(anecdotes, 'votes', 'desc').map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
