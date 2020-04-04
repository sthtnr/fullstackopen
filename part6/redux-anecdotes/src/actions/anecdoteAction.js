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

const initializeAnec = anecs => {
  return {
    type: 'INIT_ANEC',
    data: anecs,
  }
}

export { upVote, createAnec, initializeAnec }
