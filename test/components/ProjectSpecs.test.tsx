import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectSpecs, { ProjectSpecsProps } from '../../src/components/ProjectSpecs/ProjectSpecs';

const specs: ProjectSpecsProps = {
    entries: [
        {
            title: 'title1',
            contents: [{ text: 'ref_with_link1', link: 'url1' }, { text: 'ref_without_link1' }],
        },
        {
            title: 'title2',
            contents: [{ text: 'ref_with_link2', link: 'url2' }, { text: 'ref_without_link2' }],
        },
    ],
};

const renderComponent = () => {
    return render(<ProjectSpecs {...specs} />);
};

describe('the Project Specs component', () => {
    it('includes the entries', () => {
        const { getAllByText } = renderComponent();
        expect(getAllByText(/title.*/)).toHaveLength(2);
    });

    describe('an entry', () => {
        it('includes the title', () => {
            const { getByText } = renderComponent();
            expect(getByText('title1:')).toBeInTheDocument();
        });

        describe('when a content is passed with a link', () => {
            it('renders the content as a link', () => {
                const { getByText } = renderComponent();
                expect(getByText('ref_with_link1').closest('a')).toHaveAttribute('href', 'url1');
            });
        });

        describe('when a content is passed without a link', () => {
            it('renders the content as plain text', () => {
                const { queryByText } = renderComponent();
                expect(queryByText('ref_without_link1').closest('a')).not.toBeInTheDocument();
            });
        });
    });
});
