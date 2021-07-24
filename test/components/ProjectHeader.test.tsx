import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectHeader, {
    ProjectHeaderProps,
} from '../../src/components/ProjectHeader/ProjectHeader';

const testProject: ProjectHeaderProps = {
    title: 'a title',
    subtitle: 'a subline',
    tags: ['mockTag1', 'mockTag2', 'mockTag3'],
};

const renderComponent = (customProps?) =>
    render(<ProjectHeader {...(customProps || testProject)} />);

describe('the Project Header component', () => {
    it('includes the title', () => {
        const { getByText } = renderComponent();
        expect(getByText('a title')).toBeInTheDocument();
    });

    it('includes the subtitle', () => {
        const { getByText } = renderComponent();
        expect(getByText('a subline')).toBeInTheDocument();
    });

    it('includes the tags', () => {
        const { getAllByText } = renderComponent();
        const tagsFound = getAllByText(/mockTag.*/);
        expect(tagsFound).toHaveLength(3);
    });
});
