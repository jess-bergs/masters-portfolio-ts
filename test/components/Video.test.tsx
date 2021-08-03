import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Video, { VideoProps } from '../../src/components/Video/Video';

const videoContent: VideoProps = {
    url: 'a video url',
    posterImageUrl: 'a poster image url',
    autoPlay: true,
};

const renderComponent = (customProps?) => {
    return render(<Video {...(customProps || videoContent)} />);
};

describe('the Video component', () => {
    it('sets the url as the video source', () => {
        const { getByTitle } = renderComponent();
        expect(getByTitle('video-source')).toHaveAttribute('src', 'a video url');
    });

    describe('when a poster image is passed', () => {
        it('sets the image as the posterimage', () => {
            const { getByTitle } = renderComponent();
            expect(getByTitle('video')).toHaveAttribute('poster', 'a poster image url');
        });
    });

    describe('when no poster image is passed', () => {
        it('no poster is rendered', () => {
            const { queryByTitle } = renderComponent({ url: 'a video url' });
            expect(queryByTitle('video')).not.toHaveAttribute('poster');
        });
    });

    describe('the autplay flag', () => {
        describe('when the flag is passed', () => {
            it('the video controls dont show and the video is set to autoplay', () => {
                const { queryByTitle } = renderComponent();
                expect(queryByTitle('video')).not.toHaveAttribute('controls');
                expect(queryByTitle('video')).toHaveAttribute('autoPlay', '');
            });
        });

        describe('when the flag is not passed', () => {
            it('the video controls show and the video is set to not autoplay', () => {
                const { queryByTitle } = renderComponent({ ...videoContent, autoPlay: false });
                expect(queryByTitle('video')).toHaveAttribute('controls');
                expect(queryByTitle('video')).not.toHaveAttribute('autoPlay');
            });
        });
    });
});
