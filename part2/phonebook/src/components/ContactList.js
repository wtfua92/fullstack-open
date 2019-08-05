import React from 'react';
import ContactItem from './ContactItem';

function ContactList({contacts, filter}) {
    const getContactItems = () => {
        let newContacts = filter ? contacts.filter((item) => item.name.includes(filter)) : contacts;
        return newContacts.map((contact) => <ContactItem name={contact.name} phone={contact.phone} key={contact.phone}/>);
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