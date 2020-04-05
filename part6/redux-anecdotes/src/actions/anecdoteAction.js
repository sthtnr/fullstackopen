import anecService from '../services/anecdotes'

const upVote = anec => {
  return {
    type: 'UP_VOTE',
    data: { ...anec },
  }
}

const createAnec = data => {
  return {
    type: 'NEW_ANEC',
    data,
  }
}

const initializeAnec = () => {
  return async dispatch => {
    const anecs = await anecService.getAll()
    dispatch({ type: 'INIT_ANEC', data: anecs })
  }
}

export { upVote, createAnec, initializeAnec }
