/* Core */
import { useEffect, useState } from 'react';
import { generateMedia } from 'styled-media-query';
import { useMediaQuery } from 'react-responsive';

/* Viewports */
const mobile = 375;
const tabletContent = 690;
const tablet = 768;
const desktopContent = 1110;
const desktop = 1440;

const viewports = {
    mobile:         `${mobile}px`,
    tabletContent:  `${tabletContent}px`,
    tablet:         `${tablet - 1}px`,
    desktopContent: `${desktopContent}px`,
    desktop:        `${desktop}px`,
};

/* Medias */
const media = generateMedia(viewports);

const useMobileMQ = () => useMediaQuery({ query: `(max-width: ${mobile}px)` });
const useTabletContentMQ = () => useMediaQuery({ query: `(max-width: ${tabletContent}px)` });
const useTabletMQ = () => useMediaQuery({ query: `(max-width: ${tablet - 1}px)` });
const useDesktopContentMQ = () => useMediaQuery({ query: `(max-width: ${desktopContent}px)` });
const useDesktopMQ = () => useMediaQuery({ query: `(min-width: ${tablet}px)` });

/* Components */
const Desktop = (props: Props) => {
    const ssrChildren = useSSRchildren(props.children);
    const isDesktop = useDesktopMQ();

    return isDesktop ? ssrChildren : null;
};
const DesktopContent = (props: Props) => {
    const ssrChildren = useSSRchildren(props.children);
    const isDesktop = useDesktopContentMQ();

    return isDesktop ? ssrChildren : null;
};
const Tablet = (props: Props) => {
    const ssrChildren = useSSRchildren(props.children);
    const isTablet = useTabletMQ();

    return isTablet ? ssrChildren : null;
};
const TabletContent = (props: Props) => {
    const ssrChildren = useSSRchildren(props.children);
    const isTablet = useTabletContentMQ();

    return isTablet ? ssrChildren : null;
};
const Mobile = (props: Props) => {
    const ssrChildren = useSSRchildren(props.children);
    const isMobile = useMobileMQ();

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
    useTabletContentMQ,
    useTabletMQ,
    useDesktopContentMQ,
    useDesktopMQ,
    Desktop,
    DesktopContent,
    Tablet,
    TabletContent,
    Mobile
};
