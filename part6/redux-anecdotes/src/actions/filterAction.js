const anecFilter = inputValue => {
  return {
    type: 'FILTER',
    data: { inputValue },
  }
}

export { anecFilter }
