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
        const { getByTestId } = renderComponent();
        const imageElement = getByTestId('hero-image');
        expect(imageElement).toHaveStyle(`background-image: url(${projectPage.heroImageSrc})`);
    });

    it('renders the passed content text', () => {
        const { getByText } = renderComponent();
        const textElement = getByText('some sample text');
        expect(textElement).toBeInTheDocument();
    });
});
