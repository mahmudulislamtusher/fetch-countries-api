import React from 'react';

const Country = (props) => {
    // const {countryName, flag, population, region} = props.country;
    const flagStyles = {
        width: '250px',
        height: '250px'
    }
    const countryStyle = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px',
    }
    const handleAddCountry = props.handleAddCountry;
    console.log(handleAddCountry);
    return (
        <div style={countryStyle}>
            <h3>Country Name:{props.countryName}</h3>
            <img style={flagStyles} src={props.flag}/>
            <p>Country Population:{props.population}</p>
            <p>Region:{props.region}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};


export default Country;