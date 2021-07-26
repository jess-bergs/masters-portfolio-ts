import React from 'react';

import Headline from './Headline';

export default {
    component: Headline,
    title: 'Components/Headline',
};

export const Default = () => (
    <div>
        <Headline text="headline – level 1" level={1} />
        <Headline text="headline – level 2" level={2} />
        <Headline text="headline – level 3" level={3} />
        <Headline text="headline – level 4" level={4} />
    </div>
);
