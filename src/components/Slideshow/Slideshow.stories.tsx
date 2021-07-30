import React from 'react';
import Slideshow, { SlideshowProps } from './Slideshow';
import Video from '../Video/Video';
import EmbeddedMedia from '../EmbeddedMedia/EmbeddedMedia';

export default {
    component: Slideshow,
    title: 'Components/Slideshow',
};

const slides = [
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
        content: <Video url="./exampleVideo.mp4" posterImageUrl="./exampleVideoPosterImage.jpg" />,
    },
];

export const ThreeSlides = () => <Slideshow slides={slides} />;
