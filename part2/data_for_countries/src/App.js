import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./components/Weather";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const isIncludes = i =>
    i.name.includes(searchText) || i.name.toLowerCase().includes(searchText);

  const matchCountries = countries.filter(isIncludes);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag"
      )
      .then(res => {
        setCountries(res.data);
      });
  }, []);

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  const handleClick = clickedCountryName => {
    setSearchText(clickedCountryName);
  };

  if (matchCountries.length >= 10) {
    return (
      <div>
        <p>
          find countries <input value={searchText} onChange={handleChange} />
        </p>
        <p>Too many mathes, specify another filter</p>
      </div>
    );
  }
  if (matchCountries.length === 1) {
    return (
      <div>
        <p>
          find countries <input value={searchText} onChange={handleChange} />
        </p>
        <h2>{matchCountries[0].name}</h2>
        <p>capital {matchCountries[0].capital}</p>
        <p>population {matchCountries[0].population}</p>
        <h3>languages</h3>
        <ul>
          {matchCountries[0].languages.map(i => (
            <li key={i.name}>{i.name}</li>
          ))}
        </ul>
        <img src={matchCountries[0].flag} alt="" height="100" width="200" />
        <Weather capitalName={matchCountries[0].capital} />
      </div>
    );
  } else {
    return (
      <div>
        <p>
          find countries <input value={searchText} onChange={handleChange} />
        </p>
        {matchCountries.map(i => (
          <p key={i.name}>
            {i.name}
            <button onClick={() => handleClick(i.name)}>show</button>
          </p>
        ))}
      </div>
    );
  }
};

export default App;
