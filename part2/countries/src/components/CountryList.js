import React from 'react';
import CountryItem from './CountryItem';
import CountryDetails from "./CountryDetails";

function CountryList({countries, filter}) {
    const newCountries = countries.filter((country) => country.name.includes(filter));
    if (newCountries.length > 10) {
        return <p>Too many matches. Please, specify your search</p>;
    } else {
        if (newCountries.length === 1) {
            return <CountryDetails country={newCountries[0]} showName />
        }
        return (<ul>
            {
                newCountries.map((country) => (<CountryItem key={country.name} country={country}/>))
            }
        </ul>);
    }
}

export default CountryList;