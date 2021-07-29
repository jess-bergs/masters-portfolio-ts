import React from 'react';
import Headline, { HeadlineProps } from '../components/Headline/Headline';
import Video, { VideoProps } from '../components/Video/Video';
import Slideshow from '../components/Slideshow/Slideshow';
import EmbeddedMedia, { EmbeddedMediaProps } from '../components/EmbeddedMedia/EmbeddedMedia';

interface ImageProps {
    src: string;
    alt: string;
}

export enum ComponentType {
    Headline = 'Headline',
    Paragraph = 'Paragraph',
    Video = 'Video',
    Image = 'Image',
    Slideshow = 'Slideshow',
    EmbeddedMedia = 'EmbeddedMedia',
}

type ComponentProps =
    | HeadlineProps
    | string
    | VideoProps
    | ImageProps
    | ComponentOptions[]
    | EmbeddedMediaProps;

export interface ComponentOptions {
    componentType: keyof typeof ComponentType;
    componentProps: ComponentProps;
    [otherProps: string]: any;
}

const ContentComponentFactory = {
    create: ({ componentType, componentProps }: ComponentOptions): JSX.Element => {
        switch (componentType) {
            case ComponentType.Headline:
                return <Headline {...(componentProps as HeadlineProps)} />;
            case ComponentType.Paragraph:
                return <p>{componentProps as string}</p>;
            case ComponentType.Image:
                return <img alt="" {...(componentProps as ImageProps)} />;
            case ComponentType.Video:
                return <Video {...(componentProps as VideoProps)} />;
            case ComponentType.Slideshow: {
                const slidesComponentConfigs = componentProps as ComponentOptions[];
                const transformedContent = slidesComponentConfigs.map(
                    ({ caption, componentType, componentProps }) => ({
                        caption,
                        content: ContentComponentFactory.create({ componentType, componentProps }),
                    }),
                );
                return <Slideshow slides={transformedContent} />;
            }
            case ComponentType.EmbeddedMedia:
                return <EmbeddedMedia {...(componentProps as EmbeddedMediaProps)} />;

            default:
                throw new Error(`unsupported componentType value: ${componentType}`);
        }
    },
};

export default ContentComponentFactory;
