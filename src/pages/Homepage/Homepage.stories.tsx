import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Homepage';

export default {
    component: Homepage,
    title: 'Pages/Homepage',
};

const projects = [
    {
        title: 'project title 1',
        subline: 'project subline 1',
        previewImageUrl: './exampleProjectPreviewImage.jpg',
        pagePath: '/',
    },
    {
        title: 'project title 2',
        subline: 'project subline 2',
        previewImageUrl: './exampleProjectPreviewImage.jpg',
        pagePath: '/',
    },
    {
        title: 'project title 3',
        subline: 'project subline 3',
        previewImageUrl: './exampleProjectPreviewImage.jpg',
        pagePath: '/',
    },
];

export const Default = () => (
    <Router>
        <Homepage projects={projects} />
    </Router>
);
