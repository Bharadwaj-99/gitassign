// components/FollowersPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function FollowersPage({ followers }) {
    return (
        <div>
            <h2>Followers</h2>
            <ul>
                {followers.map((follower) => (
                    <li key={follower.id}>
                        <Link to={`/users/${follower.username}`}>{follower.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FollowersPage;
