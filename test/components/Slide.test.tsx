import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slide, { SlideProps } from '../../src/components/Slide/Slide';

const slide: SlideProps = {
    caption: 'a caption',
    content: <img alt="some alt" />,
};

const renderComponent = (customProps?) => render(<Slide {...(customProps || slide)} />);

describe('the Slide component', () => {
    describe('when a caption is passed', () => {
        it('includes the caption box and text', () => {
            const { getByText, getByTestId } = renderComponent();
            expect(getByTestId('captionBox')).toBeInTheDocument();
            expect(getByText('a caption')).toBeInTheDocument();
        });
    });

    describe('when no caption is passed', () => {
        it('does not render the caption box', () => {
            const { queryByTestId } = renderComponent({ content: slide.content });
            expect(queryByTestId('caption-box')).not.toBeInTheDocument();
        });
    });

    it('includes the slide content', () => {
        const { getByAltText } = renderComponent();
        expect(getByAltText('some alt')).toBeInTheDocument();
    });
});
