import React from 'react';

import ProjectSpecs from './ProjectSpecs';

export default {
    component: ProjectSpecs,
    title: 'Components/ProjectSpecs',
};

const specs = {
    entries: [
        {
            title: 'Platform',
            contents: [{ text: 'Standalone application (Win / Mac)' }],
        },
        {
            title: 'Key Methods',
            contents: [
                { text: 'Photogrammetry', link: 'someUrl' },
                { text: 'mesh resolution reduction with detail transfer' },
                { text: 'physically based shading' },
            ],
        },
    ],
};

export const WithTwoEntries = () => <ProjectSpecs {...specs} />;
