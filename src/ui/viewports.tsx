/* Core */
import { useEffect, useState } from 'react';
import { generateMedia } from 'styled-media-query';
import { useMediaQuery } from 'react-responsive';

/* Viewports */
const mobile = 375;
const tablet = 768;
const desktop = 1440;

const viewports = {
    mobile:  `${mobile}px`,
    tablet:  `${tablet}px`,
    desktop: `${desktop}px`,
};

/* Medias */
const media = generateMedia(viewports);

const useMobileMQ = () => useMediaQuery({ query: `(min-width: ${mobile}px)` });
const useTabletMQ = () => useMediaQuery({ query: `(max-width: ${tablet - 1}px)` });
const useDesktopMQ = () => useMediaQuery({ query: `(min-width: ${tablet}px)` });

/* Components */
const Desktop = (props: Props) => {
    const ssrChildren = useSSRchildren(props.children);
    const isDesktop = useDesktopMQ();

    return isDesktop ? ssrChildren : null;
};
const Tablet = (props: Props) => {
    const ssrChildren = useSSRchildren(props.children);
    const isTablet = useTabletMQ();

    return isTablet ? ssrChildren : null;
};
const Mobile = (props: Props) => {
    const isMobile = useMobileMQ();
    const ssrChildren = useSSRchildren(props.children);

    return isMobile ? ssrChildren : null;
};

/* Helpers */
const useSSRchildren = (children: Props['children']) => {
    const [ ssrChildren, setSSRChildren ] = useState<Props['children'] | null>(null);

    useEffect(() => setSSRChildren(children), []);

    return ssrChildren;
};

/* Types */
interface Props {
    children: JSX.Element;
}

export {
    mobile,
    tablet,
    desktop,
    viewports,
    media,
    useMobileMQ,
    useTabletMQ,
    useDesktopMQ,
    Desktop,
    Tablet,
    Mobile
};
