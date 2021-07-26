import React from 'react';
import './_Headline.scss';

export interface HeadlineProps {
    text: string;
    level: number;
}

const Headline = ({ text, level }: HeadlineProps) =>
    React.createElement(`h${level}`, { className: 'headline' }, text);

export default Headline;
