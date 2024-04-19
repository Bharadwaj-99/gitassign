
import React, { useState } from 'react';

function RepositoryListPage() {
    const [username, setUsername] = useState('');
    const [repositories, setRepositories] = useState([]);

    const handleSearch = async () => {
       
        try {
            const response = await fetch(`/api/users/${username}`);
            const data = await response.json();
            setRepositories(data.repositories); 
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

         
          {/* `  <div>
                <img src={data.avatarUrl} alt={data.username} />
                <p>{data.username}</p>
            </div>` */}

           
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
