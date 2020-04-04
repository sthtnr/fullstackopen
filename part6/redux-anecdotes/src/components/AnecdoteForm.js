import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnec } from '../actions/anecdoteAction'
import anecService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnec = async event => {
    event.preventDefault()
    const content = event.target.anec.value
    event.target.anec.value = ''

    const newAnec = await anecService.createNew(content)
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
