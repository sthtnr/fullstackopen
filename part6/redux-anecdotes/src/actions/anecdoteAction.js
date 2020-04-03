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

export { upVote, createAnec }
