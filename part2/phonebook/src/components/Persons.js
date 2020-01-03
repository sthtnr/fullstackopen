import React from 'react'
import personService from '../services/persons'

const Persons = ({ persons, setPersons, searchName, DisplayMessage }) => {
  const isMatch = i =>
    i.name.includes(searchName) || i.name.toLowerCase().includes(searchName)

  const handleClick = (name, id) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .deletes(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          DisplayMessage(
            true,
            `Information of ${name} has already been removed from server`
          )
        })
    }
  }

  return (
    <ul>
      {persons.filter(isMatch).map(person => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleClick(person.name, person.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Persons
