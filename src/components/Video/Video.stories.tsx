import React from 'react';

import Video from './Video';

export default {
    component: Video,
    title: 'Components/Video',
};

export const Default = () => (
    <Video url="https://www.jbergs.eu/res/video/labsquare/lab2_boardupdate.mp4" />
);

export const WithPoster = () => (
    <Video
        url="https://www.jbergs.eu/res/video/labsquare/lab2_boardupdate.mp4"
        posterImageUrl="https://www.jbergs.eu/res/images/labsquare/hmd-mov/lab2_HMDupdate_poster.jpg"
    />
);
