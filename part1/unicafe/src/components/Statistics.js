import React from 'react';

function Statistics({good, bad, neutral}) {
    const all = good + bad + neutral;
    return (
        <div>
            <h2>Statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {(all / 3).toFixed(2)}</p>
            <p>positive {all ? (good / all * 100).toFixed(2) : 0}%</p>
        </div>
    );
}

export default Statistics;