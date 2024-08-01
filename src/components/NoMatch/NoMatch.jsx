import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <Link to='/'>Go Back to Home Page</Link>

        </div>
    );
};

export default NoMatch;