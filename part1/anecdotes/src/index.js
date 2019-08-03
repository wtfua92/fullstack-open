import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));

    const getRandomNumber = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    const vote = (selectedAnecdoteIndex) => {
        const newVotes = [...votes];
        newVotes[selectedAnecdoteIndex] += 1;
        setVotes(newVotes);
    };

    return (
        <div>
            <div>
                <h1>Anecdote of the day</h1>
                {props.anecdotes[selected]}
                <div>
                    <button onClick={() => { vote(selected) }}>vote</button>
                    <button onClick={() => { setSelected(getRandomNumber(props.anecdotes.length)) }}>next anecdote</button>
                </div>
            </div>
            <div>
                <h2>Anecdote with the most votes</h2>
                {props.anecdotes[votes.indexOf(Math.max(...votes))]}
            </div>
        </div>
    )
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);