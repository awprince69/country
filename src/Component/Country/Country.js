import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import '../Country/Country.css'
const Country = (props) => {
    const { flag, name, region, capital } = props.country;
    const history = useHistory();
    const handleClick = ()=>{
        const url = `/country/${name}`;
        history.push(url);
    }
    return (
        <div className="country">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Capital City: {capital} <br/>
                        Region: {region}
                    </Card.Text>
                    {/* <Link to={`/country/${name}`}><Button variant="primary">Country Details</Button></Link> */}
                    <Button variant="primary" onClick={handleClick}>Country Details</Button>
                </Card.Body>
            </Card>

            {/* <div className='countryImage'>
            <img src={flag} alt="" />
            </div>
            <div className="countryText">
            <p>Name: {name}</p>
            <p>Capital City: {capital}</p>
            <p>Region: {region}</p>
            <Link to={`/country/${name}`}><Button variant="primary">Country Details</Button></Link>
            </div> */}
        </div>
    );
};

export default Country;