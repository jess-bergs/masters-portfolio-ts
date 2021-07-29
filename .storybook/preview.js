
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
    backgrounds: {
        default: 'neutral',
        values: [
            { name: 'neutral', value: '#aaa' },
            { name: 'Live', value: '#000' },
            { name: 'contrast', value: '#ff00aa' },
        ],
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS
    },
    layout: 'fullscreen'
}


