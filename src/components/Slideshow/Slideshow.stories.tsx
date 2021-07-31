import React from 'react';
import Slideshow, { SlideshowProps } from './Slideshow';
import Video from '../Video/Video';
import EmbeddedMedia from '../EmbeddedMedia/EmbeddedMedia';

export default {
    component: Slideshow,
    title: 'Components/Slideshow',
};

const imageSlides = [
    {
        caption: 'a caption',
        content: <img alt="img content" src="./exampleSlideImage.jpg" />,
    },
    {
        caption: 'a caption',
        content: <img alt="img content" src="./exampleSlideImage.jpg" />,
    },
    {
        caption: 'a caption',
        content: <img alt="img content" src="./exampleSlideImage.jpg" />,
    },
];

const videoSlides = [
    {
        content: <Video url="./exampleVideo.mp4" posterImageUrl="./exampleVideoPosterImage.jpg" />,
        caption: 'a caption',
    },
    {
        content: <Video url="./exampleVideo.mp4" posterImageUrl="./exampleVideoPosterImage.jpg" />,
        caption: 'a caption',
    },
    {
        content: <Video url="./exampleVideo.mp4" posterImageUrl="./exampleVideoPosterImage.jpg" />,
        caption: 'a caption',
    },
];

const StagerWrapper = ({ children }) => (
    <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>{children} </div>
);

export const ImageSlides = () => (
    <StagerWrapper>
        <Slideshow slides={imageSlides} />
    </StagerWrapper>
);
export const VideoSlides = () => (
    <StagerWrapper>
        <Slideshow slides={videoSlides} />
    </StagerWrapper>
);
