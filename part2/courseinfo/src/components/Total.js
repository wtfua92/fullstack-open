import React from 'react';

function Total({parts}) {
    console.log(parts);
    return (
        <div>
            <p>Number of exercises {parts.reduce((a, b) => typeof a !== 'object' ? a + b.exercises : a.exercises + b.exercises)}</p>
        </div>
    );
}

export default Total;