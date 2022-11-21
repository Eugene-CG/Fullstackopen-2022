import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "" }]);
  const [number, setNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState(false);
  const [filtered, setFiltered] = useState();
  const addNote = (e) => {
    e.preventDefault();
    if (checkUnicPersons(persons, newName, number)) {
      alert("Only Unic Person");
      return;
    }

    setPersons(persons.concat({ name: newName, number: number }));
    setNewName("");
  };
  const checkUnicPersons = (arr, targetStr, targetNum) => {
    return arr.some(
      ({ name, number }) => name === targetStr || number === targetNum
    );
  };
  const filterPersons = ({ target }) => {
    if (target.value === "") {
      setFilter(false);
      return;
    }
    const filteredPersons = persons.filter(({ name }) =>
      name.includes(target.value)
    );
    setFiltered(filteredPersons);
    setFilter(true);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        Filter:
        <input
          type="text"
          onChange={filterPersons}
        />
        <div>
          name: <input onChange={({ target }) => setNewName(target.value)} />
          number: <input onChange={({ target }) => setNumber(target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filter
        ? filtered.map(({ name, number }) => (
            <p key={name}>
              {name} {number}
            </p>
          ))
        : persons.map(({ name, number }) => (
            <p key={name}>
              {name} {number}
            </p>
          ))}
    </div>
  );
};

export default App;
