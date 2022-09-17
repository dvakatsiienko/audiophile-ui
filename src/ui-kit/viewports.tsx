/* Core */
import { useEffect, useState } from 'react';
import { generateMedia } from 'styled-media-query';
import { useMediaQuery } from 'react-responsive';

/* Viewports */
const MIN = 0;
const mobile = 375;
const tabletContent = 690;
const tablet = 768;
const desktopContent = 1110;
const desktop = 1440;

const viewports = {
    MIN:            `${MIN}px`,
    mobile:         `${mobile}px`,
    tabletContent:  `${tabletContent}px`,
    tablet:         `${tablet}px`,
    desktopContent: `${desktopContent}px`,
    desktop:        `${desktop}px`,
};

/* Medias */
const media = generateMedia(viewports);

const useFromToMQ = (options: Options) => {
    const [ isMounted, setIsMounted ] = useState(false);

    useEffect(() => setIsMounted(true), []);

    const min = viewports[ options.from ];
    const max = viewports[ options.to as To ];

    const nextMin = tuneMin(min, 1);

    let query = `(min-width: ${nextMin}) and (max-width: ${max})`;
    if (!options.to) query = `(min-width: ${nextMin})`;

    const result = useMediaQuery({ query });

    return isMounted ? result : null;
};

/* Components */
const FromTo = (props: FromToProps) => {
    const { children, ...rest } = props;
    const isMobile = useFromToMQ(rest);

    return isMobile ? children : null;
};

/* Helpers */
const tuneMin = (strValue: string, amount = 0) => {
    if (strValue === viewports.MIN) return strValue;

    const numberValue = Number(strValue.replace('px', ''));
    const nextNumberValue = numberValue + amount;
    const result = `${nextNumberValue}px`;

    return result;
};

/* Types */
interface MQProps {
    children: JSX.Element;
}
interface Options {
    from: From;
    to?: To;
}
interface FromToProps extends MQProps, Options {}

type Viewport = keyof typeof viewports;
type From = Viewport | 'MIN';
type To = Viewport;

export {
    mobile, tablet, desktop, viewports, media, useFromToMQ, FromTo
};
