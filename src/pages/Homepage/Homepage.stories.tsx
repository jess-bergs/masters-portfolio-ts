import React from 'react';
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
    },
    {
        title: 'project title 2',
        subline: 'project subline 2',
        previewImageUrl: './exampleProjectPreviewImage.jpg',
    },
    {
        title: 'project title 3',
        subline: 'project subline 3',
        previewImageUrl: './exampleProjectPreviewImage.jpg',
    },
];

export const Default = () => <Homepage projects={projects} />;
