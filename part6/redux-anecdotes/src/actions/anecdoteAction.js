import anecService from '../services/anecdotes'

const upVote = anec => {
  return async dispatch => {
    const upVotedAnec = await anecService.updateVote(anec)
    dispatch({
      type: 'UP_VOTE',
      data: { ...upVotedAnec },
    })
  }
}

const createAnec = data => {
  return async dispatch => {
    const newAnec = await anecService.createNew(data)
    dispatch({
      type: 'NEW_ANEC',
      data: newAnec,
    })
  }
}

const initializeAnec = () => {
  return async dispatch => {
    const anecs = await anecService.getAll()
    dispatch({ type: 'INIT_ANEC', data: anecs })
  }
}

export { upVote, createAnec, initializeAnec }
