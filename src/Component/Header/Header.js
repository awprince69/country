import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to="/home" replace>
                    <Navbar.Brand>
                        {' '}
                World Countries
                </Navbar.Brand>
                </Link>
            </Navbar>
        </div>
    );
};

export default Header;