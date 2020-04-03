const getId = () => (100000 * Math.random()).toFixed(0)

const upVote = id => {
  return {
    type: 'UP_VOTE',
    data: { id },
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
