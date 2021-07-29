import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../../src/pages/Homepage/Homepage';

const projects = [
    { title: 'title1', subline: 'subline1', previewImageUrl: 'url1', pagePath: '/' },
    { title: 'title2', subline: 'subline2', previewImageUrl: 'url2', pagePath: '/' },
    { title: 'title3', subline: 'subline3', previewImageUrl: 'url3', pagePath: '/' },
];

const renderComponent = () => {
    return render(
        <Router>
            <Homepage projects={projects} />
        </Router>,
    );
};

describe('the Homepage', () => {
    it('renders the passed project title', () => {
        const { getAllByText } = renderComponent();
        expect(getAllByText(/title.*/)).toHaveLength(3);
    });

    it('renders the passed project subline', () => {
        const { getAllByText } = renderComponent();
        expect(getAllByText(/subline.*/)).toHaveLength(3);
    });
});
