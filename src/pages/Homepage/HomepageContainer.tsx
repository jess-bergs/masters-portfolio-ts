import React from 'react';
import slug from 'slug';
import Homepage from './Homepage';
import projectPageContents from '../../data/projectPageContentsData.json';

const getProjectRouteSlug = (project) => `/${slug(project.headerContents.title)}`;

const fetchProjectPreviews = (projects) =>
    projects.map((project) => ({
        ...project.preview,
        pagePath: getProjectRouteSlug(project),
    }));

const HomepageContainer = () => <Homepage projects={fetchProjectPreviews(projectPageContents)} />;

export default HomepageContainer;
