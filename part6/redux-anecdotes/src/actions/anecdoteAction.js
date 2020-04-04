const getId = () => (100000 * Math.random()).toFixed(0)

const upVote = anec => {
  return {
    type: 'UP_VOTE',
    data: { ...anec },
  }
}

const createAnec = content => {
  return {
    type: 'NEW_ANEC',
    data: {
      content,
      id: getId(),
      votes: 0,
    },
  }
}

const initializeAnec = anecs => {
  return {
    type: 'INIT_ANEC',
    data: anecs,
  }
}

export { upVote, createAnec, initializeAnec }
