import React from 'react';

function Statistics({good, bad, neutral}) {
    return (
        <div>
            <h2>Statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </div>
    );
}

export default Statistics;