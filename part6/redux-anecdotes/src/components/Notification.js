import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notif)
  const dispatch = useDispatch()

  setTimeout(() => {
    dispatch({ type: 'CLEAR_NOTIF' })
  }, 3000)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification === '' ? 'none' : '',
  }
  return <div style={style}>{notification}</div>
}

export default Notification
