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

        document.addEventListener('pointerdown', handleClickOutside);
        return () => document.removeEventListener('pointerdown', handleClickOutside);
    }, [ ref, bool, isMounted ]);
};
