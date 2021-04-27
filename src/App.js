import { useState,useEffect } from 'react';
import Country from './Components/Country/Country';

function App() {
 const [countries, setCountries] = useState([])
 useEffect(() => {
   fetch('https://restcountries.eu/rest/v2/all')
   .then(response => response.json())
   .then(data => {setCountries(data);})
   .catch(error => console.log(error))
 }, []);
     const handleAddCountry = (country) => {
       console.log('Country Added', country);
     }

  return (
    <div className="App">
      <h3>Country Loaded: {countries.length}</h3>
      <h4>Country Added:</h4>
        {
          countries.map(country => <Country
            key={country.alpha3Code}
            countryName={country.name}
            population={country.population}
            region={country.region}
            flag={country.flag}
            handleAddCountry ={handleAddCountry}
            />)
        }
    </div>
  );
}



export default App;