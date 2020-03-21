import React from 'react'
import { createAnec } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {
  const addAnec = event => {
    event.preventDefault()
    store.dispatch(createAnec(event.target.anec.value))
    event.target.anec.value = ''
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
