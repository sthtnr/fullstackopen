const anecReducer = (state = [], action) => {
  switch (action.type) {
    case 'UP_VOTE':
      const id = action.data.id
      const votes = action.data.votes
      return state.map(anec => (anec.id !== id ? anec : { ...anec, votes }))
    case 'NEW_ANEC':
      return [...state, action.data]
    case 'FILTER':
      const inputValue = action.data.inputValue
      return state.filter(anec => anec.content.includes(inputValue))
    case 'INIT_ANEC':
      return action.data
    default:
      return state
  }
}

export default anecReducer
