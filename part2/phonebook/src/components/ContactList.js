import React from 'react';
import ContactItem from './ContactItem';

function ContactList({contacts}) {
    return (
        <div>
            {
                contacts.map((contact) => <ContactItem name={contact.name} phone={contact.phone} key={contact.phone}/>)
            }
        </div>
    );
}

export default ContactList;