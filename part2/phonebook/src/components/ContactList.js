import React from 'react';
import ContactItem from './ContactItem';

function ContactList({contacts}) {
    return (
        <div>
            {
                contacts.map((contact) => <ContactItem name={contact.name}/>)
            }
        </div>
    );
}

export default ContactList;