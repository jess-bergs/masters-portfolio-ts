import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmbeddedMedia, {
    EmbeddedMediaProps,
} from '../../src/components/EmbeddedMedia/EmbeddedMedia';

const EmbeddedMediaContent: EmbeddedMediaProps = {
    url: 'a YouTube url',
    posterImageSrc: 'a poster image path',
};

const renderComponent = () => {
    return render(<EmbeddedMedia {...EmbeddedMediaContent} />);
};

describe('the EmbeddedMedia component', () => {
    it('sets the url as the EmbeddedMedia source', () => {
        const { getByTitle } = renderComponent();
        expect(getByTitle('iframe')).toHaveAttribute('src', 'a YouTube url');
    });

    describe('when a poster image is passed', () => {
        it('sets the image as the posterimage', () => {
            const { getByTitle } = renderComponent();
            expect(getByTitle('iframe')).toHaveStyle(
                `background-image: url(${EmbeddedMediaContent.posterImageSrc})`,
            );
        });
    });
});
