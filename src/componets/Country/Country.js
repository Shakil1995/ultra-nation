import React from 'react';

const country = (props) => {
    // console.log(props);

    const {name,population,region,flag} = props.country;
    const flagStyle={height:'60px'}
    return (
        <div>
            <h1> <samp >this is </samp> :  {name}</h1>
            <img style={flagStyle} src={flag} alt="" srcset=""/>
            <p> population : {population}</p>
            <p><small> region:  {region}</small></p>
        </div>
    );
};

export default country;