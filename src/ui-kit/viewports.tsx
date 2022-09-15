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
    tablet:         `${tablet}px`,
    desktopContent: `${desktopContent}px`,
    desktop:        `${desktop}px`,
};

/* Medias */
const media = generateMedia(viewports);

const useFromToMQ = (options: Options) => {
    const nextViewports = { ...viewports, zero: '0px' };
    const min = nextViewports[ options.from ];
    const max = nextViewports[ options.to ];

    const query = `(min-width: ${min}) and (max-width: ${max})`;

    return useMediaQuery({ query });
};
const useZeroMQ = () => useMediaQuery({ query: '(min-width: 0px)' });
const useMobileMQ = () => useMediaQuery({ query: `(min-width: ${mobile + 1}px)` });
const useTabletContentMQ = () => useMediaQuery({ query: `(min-width: ${tabletContent + 1}px)` });
const useTabletMQ = () => useMediaQuery({ query: `(min-width: ${tablet + 1}px)` });
const useDesktopContentMQ = () => useMediaQuery({ query: `(min-width: ${desktopContent + 1}px)` });
const useDesktopMQ = () => useMediaQuery({ query: `(min-width: ${desktop + 1}px)` });

/* Components */
const FromTo = (props: FromToProps) => {
    const { children, ...rest } = props;
    const ssrChildren = useSSRchildren(children);
    const isMobile = useFromToMQ(rest);

    return isMobile ? ssrChildren : null;
};
const Mobile = (props: MQProps) => {
    const ssrChildren = useSSRchildren(props.children);
    const isMobile = useMobileMQ();

    return isMobile ? ssrChildren : null;
};
const TabletContent = (props: MQProps) => {
    const ssrChildren = useSSRchildren(props.children);
    const isTabletContent = useTabletContentMQ();

    return isTabletContent ? ssrChildren : null;
};
const Tablet = (props: MQProps) => {
    const ssrChildren = useSSRchildren(props.children);
    const isTablet = useTabletMQ();

    return isTablet ? ssrChildren : null;
};
const DesktopContent = (props: MQProps) => {
    const ssrChildren = useSSRchildren(props.children);
    const isDesktopContent = useDesktopContentMQ();

    return isDesktopContent ? ssrChildren : null;
};
const Desktop = (props: MQProps) => {
    const ssrChildren = useSSRchildren(props.children);
    const isDesktop = useDesktopMQ();

    return isDesktop ? ssrChildren : null;
};

/* Helpers */
const useSSRchildren = (children: MQProps['children']) => {
    const [ ssrChildren, setSSRChildren ] = useState<MQProps['children'] | null>(null);

    useEffect(() => setSSRChildren(children), []);

    return ssrChildren;
};

/* Types */
interface MQProps {
    children: JSX.Element;
}
interface FromToProps extends MQProps, Options {}
interface Options {
    from: Viewport | 'zero';
    to: Viewport;
}
type Viewport = keyof typeof viewports;

export {
    mobile,
    tablet,
    desktop,
    viewports,
    media,

    /* MQ hooks */
    useFromToMQ,
    useMobileMQ,
    useTabletContentMQ,
    useTabletMQ,
    useDesktopContentMQ,
    useDesktopMQ,

    /* Components */
    FromTo,
    Mobile,
    TabletContent,
    Tablet,
    DesktopContent,
    Desktop
};
