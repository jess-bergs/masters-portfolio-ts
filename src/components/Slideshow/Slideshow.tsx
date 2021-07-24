import React from 'react';
import Carousel from 'react-multi-carousel';
import './_Slideshow.scss';
import '../../../node_modules/react-multi-carousel/lib/styles.css';

const carouselResponsiveBreakpoints = {
    superLargeDesktop: {
        breakpoint: { max: 2048, min: 350 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 1920, min: 350 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export interface SlideshowProps {
    slides: JSX.Element[];
}

const Slideshow = ({ slides }: SlideshowProps) => (
    <div className="slideshow__container">
        <Carousel
            responsive={carouselResponsiveBreakpoints}
            showDots
            swipeable
            draggable
            autoPlay
            infinite
            autoPlaySpeed={10000}
            transitionDuration={4000}
            dotListClass="custom-dot-list-style"
            renderDotsOutside
        >
            {slides.map((slide) => (
                <div>{slide}</div>
            ))}
        </Carousel>
    </div>
);

export default Slideshow;
