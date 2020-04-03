const initialState = ''

const notifReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UP_VOTE':
      const votedContent = action.data.content
      return `you voted '${votedContent}'`
    case 'NEW_ANEC':
      const createdContent = action.data.content
      return `you created '${createdContent}'`
    default:
      return state
  }
}

export default notifReducer
