import React from 'react';

import ProjectHeader, { ProjectHeaderProps } from './ProjectHeader';

const mockProject: ProjectHeaderProps = {
    title: 'GOMA GLASGOW',
    subtitle: 'Interactive Heritage Visualisation',
    tags: ['3D modelling & scanning ', 'RT3D', 'Unity physically based shading'],
};

export default {
    component: ProjectHeader,
    title: 'Components/ProjectHeader',
};

export const Default = () => <ProjectHeader {...mockProject} />;
