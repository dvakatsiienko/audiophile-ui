/* Core */
import styled from 'styled-components';

/* Instruments */
import { center } from '@/theme';

export const Number = (props: NumberProps) => {
    return (
        <Container>
            <span onPointerDown = { props.decrement }>-</span>
            {props.value}
            <span onPointerDown = { props.increment }>+</span>
        </Container>
    );
};

/* Styles */
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 40px;
    padding: 0 10px;
    background-color: ${p => p.theme.palette[ 'color-5' ]};
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    user-select: none;

    span {
        ${center}

        width: 25px;
        height: 25px;
        opacity: 25%;
        cursor: pointer;

        &:hover {
            opacity: 100%;
            color: ${p => p.theme.palette[ 'color-6' ]};
        }
    }
`;

/* Types */
interface NumberProps {
    value: number;
    increment: () => void;
    decrement: () => void;
}
