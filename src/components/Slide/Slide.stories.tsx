import React from 'react';

import Slide, { SlideProps } from './Slide';
import Video from '../Video/Video';

export default {
    component: Slide,
    title: 'Components/Slide',
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

const videoContent = (
    <Video
        url="https://www.jbergs.eu/res/video/labsquare/lab2_boardupdate.mp4"
        posterImageUrl="https://www.jbergs.eu/res/images/labsquare/hmd-mov/lab2_HMDupdate_poster.jpg"
    />
);

const imageSlideWithCaption: SlideProps = {
    caption: 'a caption',
    content: imageContent,
};

const iframeSlideWithoutCaption: SlideProps = {
    content: iFrameContent,
    caption: 'a caption',
};

const videoSlideWithCaption: SlideProps = {
    content: videoContent,
    caption: 'a caption',
};

export const ImageWithCaption = () => <Slide {...imageSlideWithCaption} />;
export const IFrameWithoutCaption = () => <Slide {...iframeSlideWithoutCaption} />;
export const VideoWithCaption = () => <Slide {...videoSlideWithCaption} />;
