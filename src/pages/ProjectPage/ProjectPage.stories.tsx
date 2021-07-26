import React from 'react';
import ProjectPage, { ProjectPageProps } from './ProjectPage';
import placeholderTexts from '../../../.storybook/story-assets/placeholderTexts.json';

const projectPage: ProjectPageProps = {
    heroImageSrc: './exampleHeroImage.jpg',
    navigationLinks: {
        left: { name: 'Spartathlon', url: 'navLinkLeft' },
        right: { name: 'Goma', url: 'navLinkRight' },
    },
    projectContents: [placeholderTexts['1000words'], placeholderTexts['1000words']],
    headerContents: {
        title: 'MOCK PROJECT',
        subtitle: 'mock project subline',
        tags: ['a mockTag', 'another mockTag', 'additional mockTag'],
    },
    specsContents: {
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
