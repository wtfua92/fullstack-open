import React, { useState } from 'react'
import ContactList from './ContactList';

const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ]);
    const [ newName, setNewName ] = useState('');

    const addPersonHandler = (event) => {
        event.preventDefault();

        const newPerson = {
            name: newName
        };

        if (persons.find((p) => p.name === newPerson.name)) {
            alert(`${newName} is already added to phonebook`);
        } else {
            setPersons([...persons, newPerson]);
            setNewName('');
        }
    };

    const onChangeHandler = (e) => {
        setNewName(e.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPersonHandler}>
                <div>
                    name: <input type="text" value={newName} onChange={onChangeHandler} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ContactList contacts={persons} />
        </div>
    )
};

export default App