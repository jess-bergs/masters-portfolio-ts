import React from 'react';
import Slider from 'react-slick';
import Slide, { SlideProps } from '../Slide/Slide';
import './_Slideshow.scss';

export interface SlideshowProps {
    slides: SlideProps[];
}

const Slideshow = ({ slides }: SlideshowProps) => (
    <div className="slideshow__container">
        <Slider
            autoplay
            autoplaySpeed={8000}
            arrows
            dots
            infinite
            speed={1300}
            easing="ease"
            slidesToShow={1}
            pauseOnDotsHover
            pauseOnHover
        >
            {slides.map((slide) => (
                <Slide {...slide} />
            ))}
        </Slider>
    </div>
);

export default Slideshow;
