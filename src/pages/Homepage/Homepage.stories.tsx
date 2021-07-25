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
        previewImageUrl: 'https://www.jbergs.eu/res/images/title/goma_square.jpg',
    },
    {
        title: 'project title 2',
        subline: 'project subline 2',
        previewImageUrl: 'https://www.jbergs.eu/res/images/title/goma_square.jpg',
    },
    {
        title: 'project title 3',
        subline: 'project subline 3',
        previewImageUrl: 'https://www.jbergs.eu/res/images/title/goma_square.jpg',
    },
];

export const Default = () => <Homepage projects={projects} />;
