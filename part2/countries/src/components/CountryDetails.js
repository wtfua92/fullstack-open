import React from 'react';

function CountryDetails({country, showName = false}) {
    const {name, population, capital, languages, flag} = country;
    return (
        <div className="country-item__details">
            {showName && <h2>{name}</h2>}
            <img src={flag} width="50px" height="30px" alt={`Flag of ${name}`}/>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Capital:</strong> {capital}</p>
            <ul>
                {languages.map((l) => <li key={l.name}>{l.name}</li>)}
            </ul>
        </div>
    );
}

export default CountryDetails;