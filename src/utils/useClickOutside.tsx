/* Core */
import { useState, useEffect, type RefObject } from 'react';

export const useClickOutside = (ref: RefObject<HTMLElement>, cb: () => void, bool: boolean) => {
    const [ isMounted, setIsMounted ] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: globalThis.MouseEvent) => {
            const { current } = ref;

            if (isMounted && current && !current.contains(event.target as unknown as Node | null)) {
                cb();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ ref, bool, isMounted ]);
};
