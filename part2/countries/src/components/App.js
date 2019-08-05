import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import CountryList from './CountryList';

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



    return (
        <div>
            <SearchBar inputValue={inputValue} onChangeHandler={onChangeHandler} />
            <CountryList countries={countries} filter={inputValue}/>
        </div>);
}

export default App;