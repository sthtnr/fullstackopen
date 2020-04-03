import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnec } from '../actions/anecdoteAction'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnec = event => {
    event.preventDefault()
    const newAnec = event.target.anec.value
    event.target.anec.value = ''
    dispatch(createAnec(newAnec))
  }

  return (
    <div>
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

export default AnecdoteForm
