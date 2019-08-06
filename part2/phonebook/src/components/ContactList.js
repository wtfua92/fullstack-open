import React from 'react';
import ContactItem from './ContactItem';

function ContactList({contacts, filter, onDelete}) {
    const getContactItems = () => {
        let newContacts = filter ? contacts.filter((item) => item.name.includes(filter)) : contacts;
        return newContacts.map((contact) => <ContactItem person={contact} onDelete={onDelete} key={contact.id}/>);
    };
    return (
        <div>
            {
                getContactItems()
            }
        </div>
    );
}

export default ContactList;