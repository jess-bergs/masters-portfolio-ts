import React from 'react';

import Slideshow, { Slide } from './Slideshow';

export default {
    component: Slideshow,
    title: 'Components/Slideshow',
};

const stringSlides: Slide[] = ['slide1', 'slide2', 'slide3'];

export const WithStrings = () => <Slideshow slides={stringSlides} />;
