import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import slug from 'slug';
import HomepageContainer from './pages/Homepage/HomepageContainer';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContentComponentsFactory from './utils/ContentComponentsFactory';
import circularIterator from './utils/CircularIterator';
import projectsContents from './data/projectPageContentsData.json';

const getProjectRouteSlug = (project) => `/${slug(project.headerContents.title)}`;

const fetchProjectPageContents = (project) => {
    const projectContents = {
        contents: project.projectContents.map((item) => ContentComponentsFactory.create(item)),
    };
    const { headerContents, specsContents, heroImageSrc } = project;
    return {
        projectContents,
        headerContents,
        specsContents,
        heroImageSrc,
    };
};
const generateProjectPageRoutes = (projectsData) =>
    projectsData.map((curProject, index) => {
        const prevProject = circularIterator.getPrevious(projectsData, index);
        const nextProject = circularIterator.getNext(projectsData, index);
        const navigationLinks = {
            previous: {
                name: prevProject.headerContents.title,
                url: getProjectRouteSlug(prevProject),
            },
            next: {
                name: nextProject.headerContents.title,
                url: getProjectRouteSlug(nextProject),
            },
        };

        return (
            <Route
                path={getProjectRouteSlug(curProject)}
                component={() => (
                    <ProjectPage
                        {...fetchProjectPageContents(curProject)}
                        navigationLinks={navigationLinks}
                    />
                )}
            />
        );
    });

const App = () => (
    <div className="app__container">
        <Router>
            <Switch>
                {generateProjectPageRoutes(projectsContents).map((projectPage) => projectPage)}
                <Route exact path="/" component={() => <HomepageContainer />} />
            </Switch>
        </Router>
    </div>
);

export default App;
