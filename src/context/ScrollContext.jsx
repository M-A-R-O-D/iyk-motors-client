import React, { createContext, useContext, useRef, useCallback } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const refs = useRef({});

    const setRef = useCallback((key, element) => {
        refs.current[key] = element;
    }, []);

    const scrollTo = useCallback((key) => {
        const element = refs.current[key];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <ScrollContext.Provider value={{ setRef, scrollTo }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);
