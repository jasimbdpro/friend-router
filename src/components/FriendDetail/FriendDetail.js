import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friendInfo, setFriendInfo] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriendInfo(data))
    }, [])
    return (
        <div>
            <h3>This is friend detail component: {friendId}</h3>
            <h3>{friendInfo.name}</h3>
            <p>Email: {friendInfo.email}</p>
            <p>Phone: {friendInfo.phone}</p>
            <p>Website: {friendInfo.website}</p>
        </div>
    );
};

export default FriendDetail;