import React from 'react';

function ContactItem({person, onDelete}) {
    const {name, number} = person;
    return (
        <div>
            <span>{name}: {number} </span>
            <button type="button" onClick={() => onDelete(person)}>delete</button>
        </div>
    );
}

export default ContactItem;