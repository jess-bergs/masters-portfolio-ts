import React from 'react';
import ProjectPage, { ProjectPageProps } from './ProjectPage';
import placeholderTexts from '../../../.storybook/storybook-helpers/placeholderTexts.json';

const projectPage: ProjectPageProps = {
    heroImageSrc: 'https://www.jbergs.eu/res/images/goma/goma_header_SM.jpg',
    contentText: placeholderTexts['1000words'],
};

export default {
    component: ProjectPage,
    title: 'Pages/ProjectPage',
};

export const Default = () => <ProjectPage {...projectPage} />;
