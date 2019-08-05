import React from 'react';

function ContactForm({addPerson, newName, onNameChange, onPhoneChange, newPhone}) {
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input type="text" value={newName} onChange={onNameChange} />
            </div>
            <div>
                phone number: <input type="text" value={newPhone} onChange={onPhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
}

export default ContactForm;