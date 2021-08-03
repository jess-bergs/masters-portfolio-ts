import React from 'react';
import './_Video.scss';

export interface VideoProps {
    url: string;
    posterImageUrl?: string;
    autoPlay?: boolean;
}

const Video = ({ url, posterImageUrl, autoPlay = false }: VideoProps) => {
    const settings = {
        poster: posterImageUrl,
        preload: 'auto',
        loop: true,
        autoPlay,
        controls: !autoPlay,
    };
    return (
        <div className="video__container">
            <video title="video" className="video__wrapper" {...settings}>
                <source src={url} title="video-source" type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;
