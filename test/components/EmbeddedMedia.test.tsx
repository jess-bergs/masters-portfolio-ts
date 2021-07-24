import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmbeddedMedia from '../../src/components/EmbeddedMedia/EmbeddedMedia';

const EmbeddedMediaContent = {
    url: 'a YouTube url',
};

const renderComponent = () => {
    return render(<EmbeddedMedia {...EmbeddedMediaContent} />);
};

describe('the EmbeddedMedia component', () => {
    it('sets the url as the EmbeddedMedia source', () => {
        const { getByTitle } = renderComponent();
        expect(getByTitle('iframe')).toHaveAttribute('src', 'a YouTube url');
    });
});
