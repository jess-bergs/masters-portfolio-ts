import React from 'react';

import Slideshow, { SlideshowProps } from './Slideshow';
import Slide, { SlideProps } from '../Slide/Slide';

export default {
    component: Slideshow,
    title: 'Components/Slideshow',
};

const iFrameContent = (
    <iframe
        className="iframe"
        src="https://sketchfab.com/models/d5ba8a80db4e4c9d9925fbbab52a03c5/embed"
        frameBorder="0"
        allowFullScreen
        title="iframe"
    />
);

const imageContent = (
    <img
        alt="img content"
        src="https://www.jbergs.eu/res/images/goma/workflow/goma_workflow__0006_Ebene%201.jpg"
    />
);

const imageSlideWithCaption: SlideProps = {
    caption: 'a caption',
    content: imageContent,
};

const iframeSlideWithCaption: SlideProps = {
    caption: 'a caption',
    content: iFrameContent,
};

const slideShowItems: SlideshowProps = {
    slides: [<Slide {...imageSlideWithCaption} />, <Slide {...iframeSlideWithCaption} />],
};

export const TwoSlides = () => <Slideshow {...slideShowItems} />;
