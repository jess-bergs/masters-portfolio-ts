import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TemplateComponent from '../../src/components/TemplateComponent/TemplateComponent';

const renderComponent = () => {
    return render(<TemplateComponent />);
};

describe('the Template component', () => {
    it('includes the platform', () => {
        const { getByText } = renderComponent();
        expect(getByText('[template component placeholder text]')).toBeInTheDocument();
    });
});
