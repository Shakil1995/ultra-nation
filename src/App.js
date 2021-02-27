import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './componets/Country/Country';
import Cart from './componets/Cart/Cart';

function App() {

  const [countries, setCountries]=useState([]);
  const[population,setPopulation]=useState([]);
  const [cart,setcart]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then (data=>{
      setCountries(data);
      data.map(country => country.name)
    })
    .catch(error=>console.log(error))
  },[])


  const handleAddCountry=(country) =>  {
     // console.log('Click addedd',country);
     const newCart=[...cart,country];
     setcart(newCart);
}

// let allPopulation=0
// for (let i = 0; i < cart.length; i++) {
//     const allPopulation = cart[i];
//     allPopulationTotal=allPopulation+allPopulation;
//     return allPopulationTotal;
//     console.log(allPopulationTotal);
    
// }
  return (
    <div className="App">
<h1>Total Country  : {countries.length}</h1>
<h1>Total Population : {population}</h1>
<h4>Country Added : {cart.length}</h4>
<Cart cart={cart}></Cart>

{/* <table style={{ width:'100%' }}>
<tr>
          <th>Flag</th>
          <th>Country</th>
          <th>region</th>
          <th>capital</th>
          <th>languages</th>
          <th>Area</th>
          <th>population</th>
          <th>timezones</th>
          <th>Add Button</th>

        </tr>
        <tr>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
    
        </tr>
</table> */}

<ul>
{
  countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country> )
}
</ul>
          

    
    </div>
  );
}

export default App;
