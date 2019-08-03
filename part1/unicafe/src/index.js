import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const all = good + bad + neutral;

    const displayStatistics = () => {
        if (good === 0 && neutral === 0 && bad === 0) {
            return <p>No feedback given</p>;
        }
        return (<div>
            <Statistics text="good" value={good}/>
            <Statistics text="neutral" value={neutral}/>
            <Statistics text="bad" value={bad}/>
            <Statistics text="all" value={all}/>
            <Statistics text="average" value={(all / 3).toFixed(2)}/>
            <Statistics text="positive" value={(good / all * 100).toFixed(2) + '%'}/>
        </div>);
    };

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button text="good" onClick={() => setGood(good + 1)} />
            <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
            <Button text="bad" onClick={() => setBad(bad + 1)} />
            <h2>Statistics</h2>
            {displayStatistics()}
        </div>
    )
};

/*
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
* */

ReactDOM.render(<App />,
    document.getElementById('root')
);