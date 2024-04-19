// components/RepositoryListPage.js
import React, { useState } from 'react';

function RepositoryListPage() {
    const [username, setUsername] = useState('');
    const [repositories, setRepositories] = useState([]);

    const handleSearch = async () => {
        // Fetch repositories based on the username
        // Update the repositories state
        // ...

        // Example: Fetch repositories from your backend API
        try {
            const response = await fetch(`/api/users/${username}`);
            const data = await response.json();
            setRepositories(data.repositories); // Assuming your API returns an array of repositories
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {/* Display user info */}
            {/* Example: */}
          `  {/* <div>
                <img src={data.avatarUrl} alt={data.username} />
                <p>{data.username}</p>
            </div>` */}

            {/* Display repository list */}
            {/* Example: */}
            <ul>
                {repositories.map((repo) => (
                    <li key={repo.id}>
                        <a href={`/repositories/${repo.name}`}>{repo.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RepositoryListPage;
