import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import FilterByName from './FilterByName';

const App = () => {
    const [ persons, setPersons] = useState([
    ]);
    const [ newName, setNewName ] = useState('');
    const [ newPhone, setNewPhone ] = useState('');
    const [ newNameFilter, setNewNameFilter ] = useState('');

    useEffect(() => {
        const getPersons = async () => {
            const result = (await axios.get('http://localhost:3001/persons')).data;
            setPersons(result);
        };
        getPersons().catch(() => { setPersons([]) });
    }, []);

    const addPersonHandler = (event) => {
        event.preventDefault();

        const newPerson = {
            name: newName,
            phone: newPhone
        };

        if (persons.find((p) => p.name === newPerson.name)) {
            alert(`${newName} is already added to phonebook`);
        } else if (persons.find((p) => p.phone === newPerson.phone)) {
            alert(`${newPhone} is already assigned to someone else`);
        }
        else {
            setPersons([...persons, newPerson]);
            setNewName('');
            setNewPhone('');
        }
    };

    const onNameChangeHandler = (e) => {
        setNewName(e.target.value);
    };

    const onPhoneChangeHandler = (e) => {
        setNewPhone(e.target.value);
    };

    const onFilterChangeHandler = (e) => {
        setNewNameFilter(e.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <span>Search by name:</span>
            <FilterByName filterValue={newNameFilter} onChange={onFilterChangeHandler}/>
            <h2>Add a new contact</h2>
            <ContactForm addPerson={addPersonHandler} onNameChange={onNameChangeHandler} onPhoneChange={onPhoneChangeHandler} newPhone={newPhone} newName={newName} />
            <h2>Numbers</h2>
            <ContactList contacts={persons} filter={newNameFilter} />
        </div>
    )
};

export default App