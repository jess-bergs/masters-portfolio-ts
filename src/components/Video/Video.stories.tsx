import React from 'react';

import Video from './Video';

export default {
    component: Video,
    title: 'Components/Video',
};

export const Default = () => <Video url="./exampleVideo.mp4" />;

export const WithPoster = () => (
    <Video url="./exampleVideo.mp4" posterImageUrl="./exampleVideoPosterImage.jpg" />
);
