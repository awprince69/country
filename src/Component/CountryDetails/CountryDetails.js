import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import '../CountryDetails/CountryDetails.css'

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [countryName])
    const { area, flag, name, capital, population, languages, timezones, borders, nativeName } = country;
    // console.log(languages);
    // languages.map(language=>console.log(language))
    // console.log(countryName.length)
    const language =  country.languages?.map(language=> language.name)
    const history = useHistory();
    const backToHome= ()=> {
        history.push("/home")
    }
    return (
        <div className='countryDetails'>
            <div >
                <img src={flag} alt="" />
            </div>
            <div className='mt-2 details'>
                <p> Name: {name}</p>
                <p>Capital: {capital}</p>
                {/* <p>Language: {languages?.[0].name}</p> */}
                <p>Language: {language + ''}</p>
                <p>Native Language: {languages?.[0].nativeName}</p>
                <p>Native name: {nativeName}</p>
                <p>Population: {population}</p>
                <p>Time Zone: {timezones + ''}</p>
                <p>Area: {area}</p>
                <p>Border Area: {borders + ''}</p>
                <Button variant='success' onClick={backToHome}>Back</Button>
            </div>
        </div>
    );
};

export default CountryDetails;


// {
//     country.languages?.map((language, idx) => {
//         <small key={idx} style={{ marginLeft: "5px" }}>
//             {language.name},
//         </small>
//     })
// }