import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectPage, { ProjectPageProps } from '../../src/pages/ProjectPage/ProjectPage';

const projectPage: ProjectPageProps = {
    heroImageSrc: 'anImage.jpg',
    headerContent: {
        title: 'a title',
        subtitle: 'a subline',
        tags: ['mockTag1', 'mockTag2', 'mockTag3'],
    },
    textContent: 'some sample text',
    specsContent: {
        entries: [
            {
                title: 'title1',
                contents: [{ text: 'ref_with_link1', link: 'url1' }, { text: 'ref_without_link1' }],
            },
        ],
    },
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
