import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slide, { SlideProps } from '../../src/components/Slide/Slide';

const slide: SlideProps = {
    caption: 'a caption',
    content: <img alt="some alt" data-testid="content test-id" />,
};

const renderComponent = (customProps?) => render(<Slide {...(customProps || slide)} />);

describe('the Slide component', () => {
    describe('when a caption is passed', () => {
        it('includes the caption box and text', () => {
            const { getByText, getByTestId } = renderComponent();
            expect(getByTestId('caption-box')).toBeInTheDocument();
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
        const { getByTestId } = renderComponent();
        expect(getByTestId('content test-id')).toBeInTheDocument();
    });
});
