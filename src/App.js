import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import RepositoryListPage from './components/RepositoryListPage';
import RepositoryDescriptionPage from './components/RepositoryDescriptionPage';
import FollowersPage from './components/FollowersPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RepositoryListPage />} />
                <Route path="/repositories/:repoName" element={<RepositoryDescriptionPage />} />
                <Route path="/users/:username" element={<FollowersPage />} />
            </Routes>
        </Router>
    );
}

export default App;
