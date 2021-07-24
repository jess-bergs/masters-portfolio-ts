import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Video from '../../src/components/Video/Video';

const videoContent = {
    url: 'a YouTube url',
    posterImageUrl: 'a poster image url',
};

const renderComponent = () => {
    return render(<Video {...videoContent} />);
};

describe('the Video component', () => {
    it('sets the url as the video source', () => {
        const { getByTitle } = renderComponent();
        expect(getByTitle('video-source')).toHaveAttribute('src', 'a YouTube url');
    });

    describe('when a poster image is passed', () => {
        it('sets the image as the posterimage', () => {
            const { getByTitle } = renderComponent();
            expect(getByTitle('video')).toHaveAttribute('poster', 'a poster image url');
        });
    });
});
