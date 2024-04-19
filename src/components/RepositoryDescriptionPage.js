// components/RepositoryDescriptionPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RepositoryDescriptionPage() {
    const { repoName } = useParams();
    const [repository, setRepository] = useState(null);

    // Fetch repository description based on repoName
    useEffect(() => {
        // Example: Fetch repository data from your backend API
        const fetchRepositoryData = async () => {
            try {
                const response = await fetch(`/api/repositories/${repoName}`);
                const data = await response.json();
                setRepository(data); // Assuming your API returns repository details
            } catch (error) {
                console.error('Error fetching repository data:', error);
            }
        };

        fetchRepositoryData();
    }, [repoName]);

    if (!repository) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Display repository description */}
            <h2>{repoName}</h2>
            <p>{repository.description}</p>
        </div>
    );
}

export default RepositoryDescriptionPage;
