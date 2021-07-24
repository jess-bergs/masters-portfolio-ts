import React from 'react';
import './_Slide.scss';

export interface SlideProps {
    caption?: string;
    content: JSX.Element;
}

const Slide = ({ caption, content }: SlideProps) => (
    <div className="slide__container">
        <div className="slide__content">{content} </div>
        {caption && (
            <div className="slide__caption-box" data-testId="captionbox">
                <div className="slide_caption-text">{caption}</div>
            </div>
        )}
    </div>
);

export default Slide;
