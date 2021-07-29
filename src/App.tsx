import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import slug from 'slug';
import Homepage from './pages/Homepage/Homepage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContentComponentFactory from './utils/ContentComponentFactory';
import CircularArray from './utils/CircularArray';
import projectPageContentsData from './data/projectPageContentsData.json';

const getProjectRoutePath = (project) => `/${slug(project.headerContents.title)}`;

const getHomepageProjectPreviews = (projects) =>
    projects.map((project) => ({
        ...project.preview,
        pagePath: getProjectRoutePath(project),
    }));

const getProjectPageContents = (project) => {
    const projectContents = {
        contents: project.projectContents.map((item) => ContentComponentFactory.create(item)),
    };
    const { headerContents, specsContents, heroImageSrc } = project;
    return {
        projectContents,
        headerContents,
        specsContents,
        heroImageSrc,
    };
};

const getProjectPageRoutes = (projectsData) =>
    projectsData.map((projectData, index) => {
        const navigationLinks = {
            left: {
                name: CircularArray.getPrevious(projectsData, index).headerContents.title,
                url: getProjectRoutePath(CircularArray.getPrevious(projectsData, index)),
            },
            right: {
                name: CircularArray.getNext(projectsData, index).headerContents.title,
                url: getProjectRoutePath(CircularArray.getNext(projectsData, index)),
            },
        };

        return (
            <Route
                path={getProjectRoutePath(projectData)}
                component={() => (
                    <ProjectPage
                        {...getProjectPageContents(projectData)}
                        navigationLinks={navigationLinks}
                    />
                )}
            />
        );
    });

const App = () => (
    <div className="app__container">
        <Router>
            {getProjectPageRoutes(projectPageContentsData).map((page) => page)}
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
