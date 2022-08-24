import React, { useEffect, useState } from 'react';
import getWeather from './api/weatherAPI';
import dateBuilder from './utils/date';
import { BsSearch } from 'react-icons/bs';
import {
    Box,
    Location,
    LocationBox,
    SearchBox,
    Temperature,
    Time,
    Weather,
    Wrapper,
} from './style.js';
import './App.css';

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    useEffect(() => {
        getWeather('Tashkent').then((res) => setWeather(res));
    }, []);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather(query).then((res) => setWeather(res));
    };

    return (
        <Wrapper>
            <Box>
                <SearchBox>
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleChange}
                        value={query}
                    />
                    <button onClick={handleSubmit}>
                        <BsSearch />
                    </button>
                </SearchBox>
                {weather && (
                    <>
                        <LocationBox>
                            <Location>
                                {weather.location?.name},{' '}
                                {weather.location?.country}
                            </Location>
                            <Time>
                                {dateBuilder(weather.current?.last_updated)}
                            </Time>
                        </LocationBox>
                        <Temperature>{weather.current?.temp_c}°C</Temperature>
                        <Weather>
                            <img
                                src={weather.current?.condition?.icon}
                                alt="icon"
                            />
                            <p>{weather.current?.condition?.text}</p>
                        </Weather>
                    </>
                )}
            </Box>
        </Wrapper>
    );
}

export default App;
