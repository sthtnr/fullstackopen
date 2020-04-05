const notifReducer = (state = '', action) => {
  switch (action.type) {
    case 'UP_VOTE':
      const votedContent = action.data.content
      return `you voted '${votedContent}'`
    case 'NEW_ANEC':
      const createdContent = action.data.content
      return `you created '${createdContent}'`
    case 'CLEAR_NOTIF':
      return ''
    default:
      return state
  }
}

export default notifReducer
