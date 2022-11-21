import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const addNote = (e) => {
    e.preventDefault();
    if (checkUnicName(persons, newName)) {
      alert("Only Unic Names");
      return;
    }

    setPersons(persons.concat({ name: newName }));
    setNewName("");
    console.log(persons);
  };
  const checkUnicName = (arr, targetStr) => {
    return arr.some(({ name }) => name === targetStr);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input onChange={({ target }) => setNewName(target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
};

export default App;
