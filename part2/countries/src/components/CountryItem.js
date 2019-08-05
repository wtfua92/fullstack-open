import React, {useState} from 'react';
import CountryDetails from './CountryDetails';

function CountryItem({country}) {
    const [detailsVisible, changeDetailsState] = useState(false)

    return (
        <div className="country-item">
            <span>{country.name} </span>
            <button type="button" onClick={() => changeDetailsState(!detailsVisible)}>{detailsVisible ? 'Hide' : 'Show'}</button>
            {
                detailsVisible && <CountryDetails  country={country} />
            }
        </div>
    );
}

export default CountryItem;