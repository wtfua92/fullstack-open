import React from 'react';
import CountryWeather from "./CountryWeather";

function CountryDetails({country, extra = false}) {
    const {name, population, capital, languages, flag} = country;

    return (
        <div className="country-item__details">
            {extra && <h2>{name}</h2>}
            <img src={flag} width="50px" height="30px" alt={`Flag of ${name}`}/>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Capital:</strong> {capital}</p>
            <ul>
                {languages.map((l) => <li key={l.name}>{l.name}</li>)}
            </ul>
            {
                extra && <CountryWeather capital={capital} />
            }
        </div>
    );
}

export default CountryDetails;