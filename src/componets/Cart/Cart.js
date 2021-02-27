import React from 'react';

const cart = (props) => {
    const cart=props.cart;
    // console.log(props);

    // let totalPopulation=0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //    totalPopulation= totalPopulation+country.population;
    // }

 

    const totalPopulation=cart.reduce((sum,country) => sum+country.population,0)

    return (
        <div>
            <h5>This is cart :{cart.length} </h5>
            {/* <h5>population :{allPopulation} </h5> */}
            <h6>total Population : {totalPopulation}</h6>
          
        </div>
    );
};

export default cart;