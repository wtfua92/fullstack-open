import React from 'react';

function Total({parts}) {
    console.log(parts);
    return (
        <div>
            <p><strong>Number of exercises {parts.reduce((a, b) => typeof a !== 'object' ? a + b.exercises : a.exercises + b.exercises)}</strong></p>
        </div>
    );
}

export default Total;