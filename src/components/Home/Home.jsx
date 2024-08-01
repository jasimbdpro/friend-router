import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';


const Home = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (

        <>
            <h1>Friend: {friends.length}</h1>
            {
                friends.map(i => <Friend friend={i}></Friend>)
            }

        </>
    );
};

export default Home;