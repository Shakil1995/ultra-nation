import React from 'react';
import './country.css';



const country = (props) => {
    // console.log(props);

    const {name,population,capital,region,area,languages,timezones,flag} = props.country;
    const flagStyle={height:'60px',width:'100px'}
    const countryStyle={ margin:'10px',backgroundColor:'LightGray' ,padding:'10px' ,border: '1px solid red'}
    const tableStyle={width:'100%' ,height:'100px',tableBorder:'1px solid black'}
// console.log(props);
   const handleAddCountry=props.handleAddCountry;
    return (

             <div style={countryStyle}>
  

  
<table style={tableStyle}>
<tr className={'tableTR'} >

          <th>Flag</th>
          <th>Country</th>
          <th>Region</th>
          <th>Capital</th>
          <th>Languages</th>
          <th>Area</th>
          <th>Population</th>
          <th>Timezones</th>
          <th></th>

        </tr>
        <tr>
        
          <td><img style={flagStyle} src={flag} alt="" srcset=""/></td>
          <td>{name}</td>
          <td>{region}</td>
          <td>{capital}</td>
          <td>{languages.name}</td>
          <td>{area} <small>km<sup>2</sup></small> </td>
          <td>{population}</td>
          <td>{timezones}</td>
          <td><button onClick={()=>handleAddCountry(props.country)} >Add Country </button></td>
        </tr>
       
      </table>

            {/* <h1> <samp >This is </samp>   {name}</h1>
            <img style={flagStyle} src={flag} alt="" srcset=""/>
            <p><small> {name}</small> <samp> population : {population}</samp>
                 </p>
            <p><small> region:  {region}</small></p>
            <button onClick={()=>handleAddCountry(props.country)} >Add Country </button> */}
        </div>
    );
};

export default country;