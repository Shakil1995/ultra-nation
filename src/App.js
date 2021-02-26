import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './componets/Country/Country';

function App() {

  const [countries, setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then (data=>{
      setCountries(data);
      data.map(country => country.name)
    })
    .catch(error=>console.log(error))
  },[])

  return (
    <div className="App">
<h1>Country Number loaded : {countries.length}</h1>
<ul>
{
  countries.map(country => <Country country={country} key={country.alpha3Code}></Country> )
}
</ul>
          

    
    </div>
  );
}

export default App;
