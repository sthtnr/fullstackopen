import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { upVote, initializeAnec } from '../actions/anecdoteAction'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anec)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnec())
  }, [dispatch])

  return (
    <div>
      {_.orderBy(anecdotes, 'votes', 'desc').map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(upVote(anecdote))}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
