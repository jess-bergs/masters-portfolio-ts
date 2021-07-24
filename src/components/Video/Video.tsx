import React from 'react';
import './_Video.scss';

interface VideoProps {
    url: string;
    posterImageUrl?: string;
}

const Video = ({ url, posterImageUrl }: VideoProps) => (
    <div className="video__container">
        <video
            title="video"
            className="video__wrapper"
            poster={posterImageUrl}
            preload="auto"
            controls
            loop
        >
            <source title="video-source" src={url} type="video/mp4" />
        </video>
    </div>
);

export default Video;
