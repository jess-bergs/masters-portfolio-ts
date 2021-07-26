import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectPage, { ProjectPageProps } from '../../src/pages/ProjectPage/ProjectPage';

const projectPage: ProjectPageProps = {
    heroImageSrc: 'anImage.jpg',
    navigationLinks: {
        left: { name: 'navNameLeft', url: 'navLinkLeft' },
        right: { name: 'navNameRight', url: 'navLinkRight' },
    },
    headerContents: {
        title: 'a title',
        subtitle: 'a subline',
        tags: ['mockTag1', 'mockTag2', 'mockTag3'],
    },
    projectContents: ['project content text 1', 'project content text 2', 'project content text 3'],
    specsContents: {
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
        const { getByTitle } = renderComponent();
        const imageElement = getByTitle('hero-image');
        expect(imageElement).toHaveStyle(`background-image: url(${projectPage.heroImageSrc})`);
    });

    it('renders the passed contents', () => {
        const { getAllByText } = renderComponent();
        const elements = getAllByText(/project content text ./);
        expect(elements).toHaveLength(3);
    });

    it('renders the passed navigation links', () => {
        const { getByText } = renderComponent();
        expect(getByText(/navNameLeft/)).toBeInTheDocument();
        expect(getByText(/navNameRight/)).toBeInTheDocument();
        expect(getByText(/navNameLeft/).closest('a')).toHaveAttribute('href', 'navLinkLeft');
        expect(getByText(/navNameRight/).closest('a')).toHaveAttribute('href', 'navLinkRight');
    });
});
