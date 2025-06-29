'use client';

import { useEffect, useRef } from 'react';

const AnimatedCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            const cursor = cursorRef.current;

            cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        };

        document.addEventListener('mousemove', moveCursor);

        return () => document.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="custom-cursor"
        />
    );
};

export default AnimatedCursor;
