
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RepositoryDescriptionPage() {
    const { repoName } = useParams();
    const [repository, setRepository] = useState(null);

    
    useEffect(() => {
        
        const fetchRepositoryData = async () => {
            try {
                const response = await fetch(`/api/repositories/${repoName}`);
                const data = await response.json();
                setRepository(data); 
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
           
            <h2>{repoName}</h2>
            <p>{repository.description}</p>
        </div>
    );
}

export default RepositoryDescriptionPage;
