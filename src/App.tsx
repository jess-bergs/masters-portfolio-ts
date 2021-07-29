import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import slug from 'slug';
import Homepage from './pages/Homepage/Homepage';

import projectPageContentsData from './data/projectPageContentsData.json';

const getProjectRoutePath = (project) => `/${slug(project.headerContents.title)}`;

const getHomepageProjectPreviews = (projects) =>
    projects.map((project) => ({
        ...project.preview,
        pagePath: getProjectRoutePath(project),
    }));

const App = () => (
    <div className="app__container">
        <Router>
            <Route
                exact
                path="/"
                component={() => (
                    <Homepage projects={getHomepageProjectPreviews(projectPageContentsData)} />
                )}
            />
        </Router>
    </div>
);

export default App;
