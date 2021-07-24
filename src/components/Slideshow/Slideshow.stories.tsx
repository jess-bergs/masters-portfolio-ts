import React from 'react';

import Slideshow, { SlideshowProps } from './Slideshow';
import Slide, { SlideProps } from '../Slide/Slide';
import Video from '../Video/Video';

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

const videoContent = (
    <Video
        url="https://www.jbergs.eu/res/video/labsquare/lab2_boardupdate.mp4"
        posterImageUrl="https://www.jbergs.eu/res/images/labsquare/hmd-mov/lab2_HMDupdate_poster.jpg"
    />
);

const videoSlideWithCaption: SlideProps = {
    content: videoContent,
    caption: 'a caption',
};

const slideShowItems: SlideshowProps = {
    slides: [
        <Slide {...imageSlideWithCaption} />,
        <Slide {...iframeSlideWithCaption} />,
        <Slide {...videoSlideWithCaption} />,
    ],
};

export const TwoSlides = () => <Slideshow {...slideShowItems} />;
