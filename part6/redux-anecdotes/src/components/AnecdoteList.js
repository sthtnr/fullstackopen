import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { upVote } from '../actions/anecdoteAction'
import anecService from '../services/anecdotes'
import { initializeAnec } from '../actions/anecdoteAction'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anec)
  const dispatch = useDispatch()

  useEffect(() => {
    anecService.getAll().then(anecs => dispatch(initializeAnec(anecs)))
  }, [dispatch])

  const vote = anec => dispatch(upVote(anec))

  return (
    <div>
      {_.orderBy(anecdotes, 'votes', 'desc').map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
