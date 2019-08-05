import React from 'react';

function ContactItem({name, phone}) {
    return (
        <p>{name}: {phone}</p>
    );
}

export default ContactItem;