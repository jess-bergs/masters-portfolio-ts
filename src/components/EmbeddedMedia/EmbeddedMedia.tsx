import React from 'react';
import './_EmbeddedMedia.scss';

export interface EmbeddedMediaProps {
    url: string;
    posterImageSrc?: string;
}

const EmbeddedMedia = ({ url, posterImageSrc }: EmbeddedMediaProps) => (
    <div className="embedded-media__container">
        <iframe
            className="embedded-media__iframe--169"
            title="iframe"
            src={url}
            frameBorder="0"
            allowFullScreen
            style={{ backgroundImage: `url(${posterImageSrc})` }}
        />
    </div>
);

export default EmbeddedMedia;
