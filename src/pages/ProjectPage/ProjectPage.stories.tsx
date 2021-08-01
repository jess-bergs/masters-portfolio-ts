import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectPage, { ProjectPageProps } from './ProjectPage';
import Video from '../../components/Video/Video';
import Slideshow from '../../components/Slideshow/Slideshow';
import EmbeddedMedia from '../../components/EmbeddedMedia/EmbeddedMedia';

const slideshow = (
    <Slideshow
        slides={[
            {
                content: (
                    <EmbeddedMedia url="https://sketchfab.com/models/d5ba8a80db4e4c9d9925fbbab52a03c5/embed" />
                ),
                caption: 'a caption',
            },
            {
                caption: 'a caption',
                content: <img alt="img content" src="./exampleSlideImage.jpg" />,
            },
            {
                caption: 'a caption',
                content: <img alt="img content" src="./exampleSlideImage.jpg" />,
            },
        ]}
    />
);

const projectPage: ProjectPageProps = {
    heroImageSrc: './exampleHeroImage.jpg',
    navigationLinks: {
        left: { name: 'Spartathlon', url: 'navLinkLeft' },
        right: { name: 'Goma', url: 'navLinkRight' },
    },
    projectContents: {
        contents: [
            <Video url="./exampleVideo.mp4" />,
            <img src="./exampleSlideImage.jpg" alt="some-alt" />,
            <div> a content item 3 </div>,
            slideshow,
        ],
    },
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

export const Default = () => (
    <Router>
        <ProjectPage {...projectPage} />
    </Router>
);
