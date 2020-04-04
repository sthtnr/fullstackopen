import React from 'react'
import { useDispatch } from 'react-redux'
import { anecFilter } from '../actions/filterAction'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = event => {
    dispatch(anecFilter(event.target.value))
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
