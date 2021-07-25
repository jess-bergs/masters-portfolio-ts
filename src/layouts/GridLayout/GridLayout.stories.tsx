import React from 'react';
import GridLayout from './GridLayout';

export default {
    component: GridLayout,
    title: 'Layouts/GridLayout',
};

const SomeItem = () => (
    <div style={{ backgroundColor: '#afa', height: '100px', textAlign: 'center' }}>item </div>
);

export const Default = () => (
    <GridLayout>
        <SomeItem />
        <SomeItem />
        <SomeItem />
    </GridLayout>
);
