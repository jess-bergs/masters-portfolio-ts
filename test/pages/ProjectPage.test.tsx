import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectPage, { ProjectPageProps } from '../../src/pages/ProjectPage/ProjectPage';

const MockJSXElement = ({ number }) => <div> a content item {number} </div>;

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
    projectContents: {
        contents: [
            <MockJSXElement number={1} />,
            <MockJSXElement number={2} />,
            <MockJSXElement number={3} />,
        ],
    },
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
        const elements = getAllByText(/a content item ./);
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
