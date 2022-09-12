/* Core */
import Image, { type StaticImageData } from 'next/future/image';
import styled from 'styled-components';

/* Components */
import { H2 } from '@/ui-kit';

export const Headphone = (props: HeadphoneProps) => {
    return (
        <Section>
            <H2>{props.name} headphones</H2>
            <Image alt = 'headphone' src = { props.img } />
        </Section>
    );
};

/* Styles */
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* Types */
interface HeadphoneProps {
    name: string;
    img: StaticImageData;
}
