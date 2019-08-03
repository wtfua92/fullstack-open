import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button text="good" onClick={() => setGood(good + 1)} />
            <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
            <Button text="bad" onClick={() => setBad(bad + 1)} />
            <h2>Statistics</h2>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
};

ReactDOM.render(<App />,
    document.getElementById('root')
);