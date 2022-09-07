/* Core */
import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 56px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const H2 = styled.h2`
    font-size: 40px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
`;

export const H3 = styled.h3`
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.15px;
    text-transform: uppercase;
`;

export const H4 = styled.h4`
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const H5 = styled.h5`
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
`;

export const H6 = styled.h6`
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.3px;
    text-transform: uppercase;
`;

export const Overline = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 10px;
    color: ${p => p.theme.palette[ 'color-6' ]};
    text-transform: uppercase;
`;

export const SubTitle = styled.p`
    font-size: 13px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    color: ${p => p.theme.palette[ 'color-6' ]};
    text-transform: uppercase;
`;

export const Body = styled.p`
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
`;
