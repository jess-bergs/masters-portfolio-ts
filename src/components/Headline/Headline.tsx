import React from 'react';
import './_Headline.scss';

export interface HeadlineProps {
    text: string;
    level: 1 | 2 | 3 | 4;
}

const Headline = ({ text, level }: HeadlineProps) => React.createElement(`h${level}`, null, text);

export default Headline;
