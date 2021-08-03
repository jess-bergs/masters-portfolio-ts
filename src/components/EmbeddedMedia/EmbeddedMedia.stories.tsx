import React from 'react';

import EmbdeddedMedia from './EmbeddedMedia';

export default {
    component: EmbdeddedMedia,
    title: 'Components/EmbeddedMedia',
};

export const Sketchfab = () => (
    <EmbdeddedMedia
        url="https://sketchfab.com/models/d5ba8a80db4e4c9d9925fbbab52a03c5/embed"
        posterImageSrc="https://d39hr3ghz5orka.cloudfront.net/images/goma/embedded-media-posters/iframe-poster-sketchfab-plate.jpg"
    />
);

export const YouTube = () => (
    <EmbdeddedMedia
        url="https://www.youtube.com/embed/5h5-iIPu7bM"
        posterImageSrc="https://d39hr3ghz5orka.cloudfront.net/images/goma/embedded-media-posters/iframe-poster-unity-yt-video.jpg"
    />
);
