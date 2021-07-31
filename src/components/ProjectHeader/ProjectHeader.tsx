import React from 'react';
import Headline from '../Headline/Headline';
import './_ProjectHeader.scss';

export interface ProjectHeaderProps {
    title: string;
    subtitle: string;
    tags: string[];
}

const TAG_SEPARATOR = ' // ';

const ProjectHeader = ({ title, subtitle, tags }: ProjectHeaderProps) => (
    <div className="project-header__container">
        <Headline text={title} level={1} />
        <Headline text={subtitle} level={2} />
        <hr className="project-header__h-line" />
        <div className="project-header__tags">
            {tags.map((tag, index) => (
                <span>
                    <span className="project-header__tag">{tag}</span>
                    {index < tags.length - 1 && TAG_SEPARATOR}
                </span>
            ))}
        </div>
    </div>
);

export default ProjectHeader;
