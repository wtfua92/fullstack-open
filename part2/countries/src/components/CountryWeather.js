import React, {useState, useEffect} from 'react';
import axios from "axios";

function CountryWeather({capital}) {
    const [weatherData, setWeatherData] = useState({});
    const url = `http://api.apixu.com/v1/current.json?key=4a591d3359e041339e7193408190508&q=${capital}`;
    const {condition = {}, temp_c, wind_kph, wind_dir} = weatherData;

    useEffect(() => {
        console.log('effect');
        axios.get(url)
            .then((response) => {
                setWeatherData(response.data.current);
            });
    }, [url]);



    return (
        <div className="weather-info">
            <p><strong>Temperature:</strong>{temp_c} C</p>
            <img src={condition.icon} alt={condition.text}/>
            <p><strong>Wind:</strong>{wind_kph} kph direction {wind_dir}</p>
        </div>
    );
}

export default CountryWeather;