import React from 'react';

function Statistics({good, bad, neutral}) {
    const all = good + bad + neutral;
    const showStatistics = good > 0 || bad > 0 || neutral > 0;
    const displayStatistics = () => (
        <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {(all / 3).toFixed(2)}</p>
            <p>positive {all ? (good / all * 100).toFixed(2) : 0}%</p>
        </div>
    );
    return showStatistics ? displayStatistics() : <p>No feedback given</p>;
}

export default Statistics;