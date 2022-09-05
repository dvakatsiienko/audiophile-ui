/* Core */
import React from 'react';
import styled from 'styled-components';

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton type = 'button' onClick = { props.onClick }>
            {props.children}
        </StyledButton>
    );
};
Button.defaultProps = {
    onClick:  () => void 0,
    children: 'Click',
};

/* Styles */
const StyledButton = styled.button`
    color: ${p => p.theme.palette[ 'color-2' ]};
    background-color: ${p => p.theme.palette[ 'color-3' ]};
`;

/* Types */
interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}
