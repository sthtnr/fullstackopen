import React from "react";

const Persons = ({ persons, searchName }) => {
  const isMatch = i =>
    i.name.includes(searchName) || i.name.toLowerCase().includes(searchName);

  return (
    <ul>
      {persons.filter(isMatch).map(person => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
