import React from 'react';
import Slideshow, { SlideshowProps } from './Slideshow';
import Slide, { SlideProps } from '../Slide/Slide';
import Video from '../Video/Video';
import EmbeddedMedia from '../EmbeddedMedia/EmbeddedMedia';

export default {
    component: Slideshow,
    title: 'Components/Slideshow',
};

const imageSlideWithCaption: SlideProps = {
    caption: 'a caption',
    content: <img alt="img content" src="./exampleSlideImage.jpg" />,
};

const embeddedMediaWithCaption: SlideProps = {
    content: (
        <EmbeddedMedia url="https://sketchfab.com/models/d5ba8a80db4e4c9d9925fbbab52a03c5/embed" />
    ),
    caption: 'a caption',
};

const videoSlideWithCaption: SlideProps = {
    content: <Video url="./exampleVideo.mp4" posterImageUrl="./exampleVideoPosterImage.jpg" />,
    caption: 'a caption',
};

const slideShowItems: SlideshowProps = {
    slides: [
        <Slide {...imageSlideWithCaption} />,
        <Slide {...embeddedMediaWithCaption} />,
        <Slide {...videoSlideWithCaption} />,
    ],
};

export const TwoSlides = () => <Slideshow {...slideShowItems} />;
