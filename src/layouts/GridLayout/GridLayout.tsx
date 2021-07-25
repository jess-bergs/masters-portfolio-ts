import React from 'react';
import './_GridLayout.scss';

interface GridLayoutProps {
    children: JSX.Element[] | JSX.Element;
}

const GridLayout = ({ children }: GridLayoutProps) => (
    <div className="grid">
        {children instanceof Array ? (
            children.map((child) => <div className="grid-item"> {child}</div>)
        ) : (
            <div className="grid-item"> {children}</div>
        )}
    </div>
);

export default GridLayout;
