/* Core */
import styled from 'styled-components';

export const Button: React.FC = () => {
    return <StyledButton type = 'button'>Click!</StyledButton>;
};

/* Styles */
const StyledButton = styled.button`
    color: ${p => p.theme.colors[ 'color-2' ]};
    background-color: ${p => p.theme.colors[ 'color-3' ]};
`;
