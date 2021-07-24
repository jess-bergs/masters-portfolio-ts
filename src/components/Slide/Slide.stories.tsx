import React from 'react';

import Slide, { SlideProps } from './Slide';
import Video from '../Video/Video';
import EmbeddedMedia from '../EmbeddedMedia/EmbeddedMedia';

export default {
    component: Slide,
    title: 'Components/Slide',
};

const imageSlideWithCaption: SlideProps = {
    caption: 'a caption',
    content: (
        <img
            alt="img content"
            src="https://www.jbergs.eu/res/images/goma/workflow/goma_workflow__0006_Ebene%201.jpg"
        />
    ),
};

const embeddedMediaWithCaption: SlideProps = {
    content: (
        <EmbeddedMedia url="https://sketchfab.com/models/d5ba8a80db4e4c9d9925fbbab52a03c5/embed" />
    ),
    caption: 'a caption',
};

const videoSlideWithCaption: SlideProps = {
    content: (
        <Video
            url="https://www.jbergs.eu/res/video/labsquare/lab2_boardupdate.mp4"
            posterImageUrl="https://www.jbergs.eu/res/images/labsquare/hmd-mov/lab2_HMDupdate_poster.jpg"
        />
    ),
    caption: 'a caption',
};

export const ImageWithCaption = () => <Slide {...imageSlideWithCaption} />;
export const EmbeddedMediaWithCaption = () => <Slide {...embeddedMediaWithCaption} />;
export const VideoWithCaption = () => <Slide {...videoSlideWithCaption} />;
