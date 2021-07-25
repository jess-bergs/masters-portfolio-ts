import { useState, useEffect } from 'react';

const useYScrollingPosition = () => {
    const getYScrollingPost = () => window.pageYOffset;

    const [yScrollingPos, setYScrollingPost] = useState(getYScrollingPost());

    useEffect(() => {
        const handleScroll = () => {
            setYScrollingPost(getYScrollingPost());
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return yScrollingPos;
};

export { useYScrollingPosition };
