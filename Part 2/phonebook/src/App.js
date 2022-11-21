import { useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { PersonInfo } from "./components/PersonInfo";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "" }]);
  const [number, setNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [showFiltered, setShowFiltered] = useState({ bool: false, str: "" });
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
  const changeShowFiltered = ({ target }) => {
    if (target.value === "") {
      setShowFiltered((prevState) => ({
        bool: false,
        str: "",
      }));
    }
    setShowFiltered((prevState) => ({
      bool: true,
      str: target.value,
    }));
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={changeShowFiltered} />
      <h3>Add a new</h3>
      <PersonForm
        addNote={addNote}
        setName={({ target }) => setNewName(target.value)}
        setNumber={({ target }) => setNumber(target.value)}
      />

      <h2>Numbers</h2>
      <PersonInfo
        persons={
          showFiltered.bool
            ? persons.filter(({ name }) => name.includes(showFiltered.str))
            : persons
        }
      />
    </div>
  );
};

export default App;
