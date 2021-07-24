import React from 'react';
import Carousel from 'react-multi-carousel';
import './_Slideshow.scss';
import '../../../node_modules/react-multi-carousel/lib/styles.css';

const carouselResponsiveBreakpoints = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export type Slide = string | JSX.Element;

interface SlideshowProps {
    slides: Slide[];
}

const Slideshow = ({ slides }: SlideshowProps) => (
    <div className="slideshow__container">
        <Carousel
            responsive={carouselResponsiveBreakpoints}
            showDots
            swipeable
            draggable
            infinite
            autoPlay={false}
            autoPlaySpeed={10000}
            transitionDuration={4000}
            dotListClass="custom-dot-list-style"
            renderDotsOutside
        >
            {slides.map((slide) => (
                <div>{slide}</div>
            ))}
        </Carousel>
        ;
    </div>
);

export default Slideshow;
