import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Headline, { HeadlineProps } from '../../src/components/Headline/Headline';

const headline: HeadlineProps = {
    text: 'some text',
    level: 2,
};

const renderComponent = (customProps?) => render(<Headline {...(customProps || headline)} />);

describe('the Headline component', () => {
    it('renders the correct level', () => {
        const { getByText } = renderComponent();
        expect(getByText('some text').tagName).toBe('H2');
    });
    it('renders the correct text', () => {
        const { getByText } = renderComponent();
        expect(getByText('some text')).toBeInTheDocument();
    });
});
