import React from 'react';

import ContentComponentFactory, {
    ComponentType,
    ComponentOptions,
} from '../../src/utils/ContentComponentFactory';
import * as _ from 'lodash';
import Headline from '../../src/components/Headline/Headline';
import Video from '../../src/components/Video/Video';
import Slideshow from '../../src/components/Slideshow/Slideshow';
import EmbeddedMedia from '../../src/components/EmbeddedMedia/EmbeddedMedia';

describe('the ContentComponentFactory', () => {
    describe('when the component type is a Headline', () => {
        it('returns a Headline component', () => {
            const componentConfig: ComponentOptions = {
                componentType: ComponentType.Headline,
                componentProps: { text: 'some text', level: 2 },
            };

            const expectedResult = <Headline text="some text" level={2} />;

            const result = ContentComponentFactory.create(componentConfig);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('when the component type is a paragraph', () => {
        it('returns a p component', () => {
            const componentConfig: ComponentOptions = {
                componentType: ComponentType.Paragraph,
                componentProps: 'some text',
            };

            const expectedResult = <p>some text</p>;

            const result = ContentComponentFactory.create(componentConfig);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('when the component type is a video', () => {
        it('returns a Video component', () => {
            const componentConfig: ComponentOptions = {
                componentType: ComponentType.Video,
                componentProps: { url: 'some url' },
            };

            const expectedResult = <Video url="some url" />;

            const result = ContentComponentFactory.create(componentConfig);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('when the component type is an image', () => {
        it('returns a img component', () => {
            const componentConfig: ComponentOptions = {
                componentType: ComponentType.Image,
                componentProps: { src: 'some src', alt: 'some alt' },
            };

            const expectedResult = <img src="some src" alt="some alt" />;

            const result = ContentComponentFactory.create(componentConfig);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('when the component type is a Slideshow', () => {
        it('returns a Slideshow component with nested content components', () => {
            const componentConfig: ComponentOptions = {
                componentType: ComponentType.Slideshow,
                componentProps: [
                    {
                        caption: 'a caption',
                        componentType: ComponentType.Image,
                        componentProps: { src: 'some src', alt: 'some alt' },
                    },
                ],
            };

            const expectedResult = (
                <Slideshow
                    slides={[
                        {
                            caption: 'a caption',
                            content: <img alt="some alt" src="some src" />,
                        },
                    ]}
                />
            );

            const result = ContentComponentFactory.create(componentConfig);
            expect(result).toEqual(expectedResult);
        });
    });

    describe('when the component type is an embedded media item', () => {
        it('returns an EmbeddedMedia component', () => {
            const componentConfig: ComponentOptions = {
                componentType: ComponentType.EmbeddedMedia,
                componentProps: { url: 'some url' },
            };

            const expectedResult = <EmbeddedMedia url="some url" />;

            const result = ContentComponentFactory.create(componentConfig);

            expect(result).toEqual(expectedResult);
        });
    });
});
