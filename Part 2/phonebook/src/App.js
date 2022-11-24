import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { PersonInfo } from "./components/PersonInfo";
import axios from "axios";
import noteServices from "./services/notes";
import notes from "./services/notes";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "", id: 0 },
  ]);
  const [number, setNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [showFiltered, setShowFiltered] = useState({ bool: false, str: "" });

  useEffect(() => {
    noteServices
      .getNotes()
      .then((response) => setPersons([...persons, ...response]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    if (updateNote(persons, newName, number)) {
      return;
    }
    const newPerson = {
      name: newName,
      number,
      id: persons[persons.length - 1].id + 1,
    };
    noteServices.create(newPerson).then((response) => console.log(response));
    setPersons(persons.concat({ name: newName, number: number }));
    setNewName("");
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
  const deleteNote = (id) => {
    const newPersons = [...persons];
    newPersons.splice(id, 1);
    noteServices.deleteNote(id);
    setPersons(newPersons);
  };
  const updateNote = (persons, newName, number) => {
    const note = persons.find((obj) => obj.name === newName);
    const changedNote = { ...note, number };

    noteServices
      .update(changedNote.id, changedNote)
      .then((response) =>
        setPersons(
          persons.map((note) => (note.name === newName ? response : note))
        )
      );
    return true;
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
        deleteNote={(id) => deleteNote(id)}
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
