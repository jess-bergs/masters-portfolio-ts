import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../../src/pages/Homepage/Homepage';

const projects = [
    { title: 'title1', subline: 'subline1', previewImageUrl: 'url1' },
    { title: 'title2', subline: 'subline2', previewImageUrl: 'url2' },
    { title: 'title3', subline: 'subline3', previewImageUrl: 'url3' },
];
const renderComponent = () => {
    return render(<Homepage projects={projects} />);
};

describe('the Project page', () => {
    it('renders the passed project title', () => {
        const { getAllByText } = renderComponent();
        expect(getAllByText(/title.*/)).toHaveLength(3);
    });

    it('renders the passed project subline', () => {
        const { getAllByText } = renderComponent();
        expect(getAllByText(/subline.*/)).toHaveLength(3);
    });
});
