import React from 'react'
import personService from '../services/persons'

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const handleSubmit = event => {
    event.preventDefault()

    const person = { name: newName, number: newNumber }

    const ExistSameData = obj =>
      obj.name === person.name && obj.number === person.number

    const ExistSameName = obj =>
      obj.name === person.name && obj.number !== person.number

    if (persons.some(ExistSameData) === true) {
      alert(`${newName} is alreadey added to phonebook`)
    }

    const copy = persons.find(ExistSameName)
    if (copy !== undefined) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService.update(copy.id, person).then(returnedPerson => {
          setPersons(
            persons.map(person =>
              person.id !== copy.id ? person : returnedPerson
            )
          )
        })
      }
    } else {
      personService
        .create(person)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
