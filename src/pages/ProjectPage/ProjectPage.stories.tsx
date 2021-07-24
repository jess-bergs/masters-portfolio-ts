import React from 'react';
import ProjectPage, { ProjectPageProps } from './ProjectPage';
import placeholderTexts from '../../../.storybook/storybook-helpers/placeholderTexts.json';

const projectPage: ProjectPageProps = {
    heroImageSrc: 'https://www.jbergs.eu/res/images/goma/goma_header_SM.jpg',
    textContent: placeholderTexts['1000words'],
    headerContent: {
        title: 'MOCK PROJECT',
        subtitle: 'mock project subline',
        tags: ['a mockTag', 'another mockTag', 'additional mockTag'],
    },
    specsContent: {
        entries: [
            {
                title: 'Maecenas',
                contents: [{ text: 'Porttitor ornare non ac enim. Donec luctus' }],
            },
            {
                title: 'Suspendisse',
                contents: [
                    { text: 'Sed rutrum dictum', link: 'someUrl' },
                    { text: 'Suspendisse sollicitudin vel' },
                    { text: 'Aliquam dictum' },
                ],
            },
            {
                title: 'Aenea',
                contents: [{ text: 'Porttitor ornare non ac enim. Donec luctus' }],
            },
        ],
    },
};

export default {
    component: ProjectPage,
    title: 'Pages/ProjectPage',
};

export const Default = () => <ProjectPage {...projectPage} />;
