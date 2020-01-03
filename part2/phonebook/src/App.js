import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import './index.css'

const Notification = ({ isErr, message }) => {
  if (message === null) {
    return null
  }
  if (isErr) {
    return <div className="error">{message}</div>
  }
  return <div className="success">{message}</div>
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchName, setSearchName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)
  const [isErr, setIsErr] = useState(false)

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const DisplayMessage = (isErr, message) => {
    setMessage(message)
    setIsErr(isErr)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification isErr={isErr} message={message} />

      <Filter searchName={searchName} setSearchName={setSearchName} />

      <h3>Add a new</h3>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        DisplayMessage={DisplayMessage}
      />

      <h3>Numbers</h3>

      <Persons
        persons={persons}
        setPersons={setPersons}
        searchName={searchName}
        DisplayMessage={DisplayMessage}
      />
    </div>
  )
}

export default App
