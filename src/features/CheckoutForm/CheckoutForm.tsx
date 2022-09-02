/* Core */
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { useRouter } from 'next/router';

/* Instruments */
import { resolver, type FormShape } from './resolver';

export const CheckoutForm = (props: CheckoutFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormShape>({
        resolver,
        mode:          'all',
        defaultValues: {
            name:  'dima',
            email: 'test@email.com',
            phone: '111-11-11',
        },
    });

    const router = useRouter();
    const [ checkoutState, setcheCkoutState ] = useState('waiting');

    const submit: SubmitHandler<FormShape> = async data => {
        console.log(data);
        props.onSubmit();

        const response = await fetch('/api/checkout', {
            method: 'POST',
            body:   JSON.stringify('test'),
        });

        const result = await response.json();

        setcheCkoutState(result.message);

        router.push('/');
    };

    return (
        <Form onSubmit = { handleSubmit(submit) }>
            <h6 data-testid = 'form-title'>Billing Details</h6>

            <div>
                <input data-testid = 'input-name' { ...register('name') } />
                <span data-testid = 'input-name-error'>{errors.name?.message}</span>
            </div>

            <div>
                <input data-testid = 'input-email' { ...register('email') } />
                <span>{errors.email?.message}</span>
            </div>

            <div>
                <input data-testid = 'input-phone' { ...register('phone') } />
                <span>{errors.phone?.message}</span>
            </div>

            <h1 data-testid = 'checkout-state'>{checkoutState}</h1>
            <button data-testid = 'button-submit' type = 'submit'>
                Continue & pay
            </button>
        </Form>
    );
};

/* Styles */
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & div {
        display: flex;
        flex-direction: column;

        & span {
            min-height: 20px;
        }
    }
`;

/* Types */
interface CheckoutFormProps {
    onSubmit: () => void;
}
