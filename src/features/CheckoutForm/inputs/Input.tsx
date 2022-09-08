/* Core */
import React from 'react';
import styled from 'styled-components';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export const Input = (props: InputProps) => {
    const { error, register, ...restProps } = props;

    return (
        <Label $isError = { !!props.error } htmlFor = { register.name }>
            <div className = 'labelContainer'>
                <span className = 'label'>{register.name}</span>
                <span className = 'errorMessage'>{error?.message}</span>
            </div>

            <input data-testid = { props[ 'data-testid' ] } { ...register } { ...restProps } />
        </Label>
    );
};
Input.defaultProps = {
    'data-testid': null,
    error:         null,
};

/* Styles */
const Label = styled.label<SLabelProps>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    --error-color: #cd2c2c;

    & .labelContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & span {
            font-weight: 700;

            &.label {
                color: ${p => (p.$isError ? 'var(--error-color)' : 'inherit')};
            }

            &.errorMessage {
                font-weight: 500;
                color: var(--error-color);
            }
        }
    }

    & input {
        width: 310px;
        height: 56px;
        padding: 18px 24px;
        border: ${p => (p.$isError
        ? '2px solid var(--error-color)'
        : `1px solid ${p.theme.palette[ 'color-9' ]}`)};
        border-radius: 8px;
        font-size: 14px;
        line-height: 19px;
        font-weight: 700;
        caret-color: ${p => p.theme.palette[ 'color-6' ]};
        outline: none;

        &:focus {
            border: ${p => (p.$isError
        ? '2px solid var(--error-color)'
        : `1px solid ${p.theme.palette[ 'color-6' ]}`)};
        }
    }
`;

/* Types */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ['data-testid']?: string;
    error?: FieldError | undefined;
    register: UseFormRegisterReturn;
}

interface SLabelProps {
    $isError: boolean;
}
