import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectPage, { ProjectPageProps } from '../../src/pages/ProjectPage/ProjectPage';

const projectPage: ProjectPageProps = {
    heroImageSrc: 'anImage.jpg',
    contentText: 'some sample text',
};

const renderComponent = () => {
    return render(<ProjectPage {...projectPage} />);
};

describe('the Project page', () => {
    it('renders the passed hero image', () => {
        const { getByAltText } = renderComponent();
        const imageElement = getByAltText('project hero');
        expect(imageElement).toHaveAttribute('src', 'anImage.jpg');
    });

    it('renders the passed content text', () => {
        const { getByText } = renderComponent();
        const textElement = getByText('some sample text');
        expect(textElement).toBeInTheDocument();
    });
});
