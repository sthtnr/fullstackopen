const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data.inputValue
    default:
      return state
  }
}

export default filterReducer
