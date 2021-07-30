import React from 'react';
import './_Video.scss';

export interface VideoProps {
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
            autoPlay
            loop
        >
            <source title="video-source" src={url} type="video/mp4" />
        </video>
    </div>
);

export default Video;
