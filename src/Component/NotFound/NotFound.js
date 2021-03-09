import React from 'react';

const NotFound = () => {
    const style= {
        margin: '100px',
        marginLeft:'300px',
        paddingLeft:'100px'
    }
    return (
        <div style={style}>
            <h4>Details not found</h4>
            <p> 404 Error...! </p>
        </div>
    );
};

export default NotFound;