/* Core */
import styled from 'styled-components';
import type { UseFormRegisterReturn } from 'react-hook-form';

export const RadioInput = (props: RadioInputProps) => {
    return (
        <Label $isChecked = { props.isChecked } htmlFor = { props.id }>
            <Input id = { props.id } type = 'radio' { ...props.register } value = { props.value } />
            {props.label}
        </Label>
    );
};

const Label = styled.label<SLabelProps>`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;
    align-items: center;
    gap: 16px;
    width: 310px;
    height: 56px;
    padding: 16px;
    font-size: 14px;
    border-radius: 8px;
    font-weight: 700;
    line-height: 19px;
    cursor: pointer;
    border: ${p => `1px solid ${p.$isChecked ? p.theme.palette[ 'color-6' ] : p.theme.palette[ 'color-9' ]}`};

    &:hover {
        border: ${p => `1px solid ${p.theme.palette[ 'color-6' ]}`};
    }
`;

const Input = styled.input`
    appearance: none;
    display: grid;
    place-content: center;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font: inherit;
    cursor: pointer;
    /* Center dot element */
    outline: 1px solid ${p => p.theme.palette[ 'color-9' ]};
    outline-offset: max(2px, 0.15em);

    &::before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 10px 10px ${p => p.theme.palette[ 'color-6' ]};
    }

    &:checked {
        &::before {
            transform: scale(1);
        }
    }
`;

/* Types */
interface RadioInputProps {
    label: string;
    id: string;
    value: string;
    isChecked: boolean;
    register: UseFormRegisterReturn;
}

interface SLabelProps {
    $isChecked: boolean;
}
