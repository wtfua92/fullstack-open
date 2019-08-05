import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
    const [countries, setCountries] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all').then(({data}) => {
            setCountries(data);
        });
    }, []);

    const displayCountries = () => {
        const newCountries = countries.filter((country) => country.name.includes(inputValue));
        if (newCountries.length > 10) {
            return <p>Too many matches. Please, specify your search</p>;
        } else {
            if (newCountries.length === 1) {
                const {name, population, capital, languages, flag} = newCountries[0];
                return (<div>
                    <h2>{name}</h2>
                    <img src={flag} width="50px" height="30px" alt={`Flag of ${name}`}/>
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Capital:</strong> {capital}</p>
                    <ul>
                        {languages.map((l) => <li key={l.name}>{l.name}</li>)}
                    </ul>
                </div>)
            }
            return (<ul>
                {
                    newCountries.map(({name}) => <li key={name}>{name}</li>)
                }
            </ul>);
        }
    };

    return (
        <div>
            name: <input value={inputValue} onChange={onChangeHandler}/>
            {
                displayCountries()
            }
        </div>
    );
}

export default App;