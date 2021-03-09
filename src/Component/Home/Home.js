import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import '../Home/Home.css'

const Home = () => {
    const [countries,setCountries]= useState([]);
    useEffect(()=>{
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[countries])
    return (
        <div className='countries-container'>
            {
                countries.map(country=><Country country={country} key={country.alpha3Code}></Country>)
            }
        </div>
    );
};

export default Home;