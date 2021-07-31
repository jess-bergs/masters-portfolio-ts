
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
    mobilePortrait: {
        name: 'mobile',
        styles: {
            width: '360px',
            height: '700px',
        },
    },
    tabletPortrait: {
        name: 'tablet',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
    desktopSmall: {
        name: 'desktop – WXGA',
        styles: {
            width: '1440px',
            height: '1080px',
        },
    },

    desktop: {
        name: 'desktop – FHD',
        styles: {
            width: '1920px',
            height: '1080px',
        },
    },
};


export const parameters = {
    backgrounds: {
        default: 'neutral',
        values: [
            { name: 'neutral', value: '#aaa' },
            { name: 'Live', value: '#000' },
            { name: 'contrast', value: '#f0a' },
        ],
    },
    viewport: {
        viewports: { ...customViewports, ...INITIAL_VIEWPORTS }
    },
    layout: 'fullscreen'
}


