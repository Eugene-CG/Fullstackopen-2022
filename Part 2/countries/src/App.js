import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState(
    "Too many matches, specify another filter"
  );
  const [cntrsToShow, setCntrsToShow] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);
  const filterCountries = ({ target }) => {
    setCntrsToShow(
      countries.filter(({ name }) => name.common.includes(target.value))
    );
  };
  return (
    <div>
      <h1>Find Countries:</h1>
      <input
        type="text"
        onChange={filterCountries}
      />
      {cntrsToShow.length < 10 ? (
        cntrsToShow.length === 1 ? (
          cntrsToShow.map((cntrs) => {
            console.log(cntrs);
            return (
              <div key={5}>
                <p key="4">Name:{cntrs.name.common}</p>
                <p key="3">Flag: {cntrs.flag}</p>
                <p key="2">Population: {cntrs.population}</p>
                <p key="1">Capital: {cntrs.capital[0]}</p>
              </div>
            );
          })
        ) : (
          cntrsToShow.map((cntrs) => {
            return <p key={cntrs.name.common}>{cntrs.name.common}</p>;
          })
        )
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
}

export default App;
