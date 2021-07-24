import { entries } from 'lodash';
import React from 'react';
import './_ProjectSpecs.scss';

interface Content {
    text: string;
    link?: string;
}

interface Entry {
    title: string;
    contents: Content[];
}

export interface ProjectSpecsProps {
    entries: Entry[];
}

const Entry = (entry: Entry) => (
    <div className="entry__container">
        <span className="entry__title">{entry.title}: </span>
        <span className="entry__contents">
            {entry.contents.map((content, index) => (
                <span className="entry__content">
                    {content.link ? <a href={content.link}>{content.text}</a> : content.text}
                    {index !== entry.contents.length - 1 && `, `}
                </span>
            ))}
        </span>
    </div>
);

const ProjectSpecs = ({ entries }: ProjectSpecsProps) => (
    <div className="project-specs__container">
        <div className="project-specs__title">PROJECT SPECS</div>
        <div className="project-specs__entries">
            {entries.map((entry) => (
                <Entry {...entry} />
            ))}
        </div>
    </div>
);

export default ProjectSpecs;
