import React from 'react';
import { Link, useNavigate, } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend
    const navigate = useNavigate()
    const handleClick = (friendId) => {
        navigate(`/friend/${friendId}`)
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <button onClick={() => handleClick(id)}>click Me</button>
            {/* <Link to={`/friend/${id}`}>
                <button>
                    Show Details of {id}
                </button>
            </Link > */}
        </div>
    );
};

export default Friend;