import React from "react";

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber
}) => {
  const handleSubmit = event => {
    event.preventDefault();
    const person = { name: newName, number: newNumber };
    const ExistSameName = obj => obj.name === person.name;
    if (persons.some(ExistSameName) === true) {
      alert(`${newName} is alreadey added to phonebook`);
    } else {
      setPersons(persons.concat(person));
    }
    setNewName("");
    setNewNumber("");
  };
  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

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
  );
};

export default PersonForm;
