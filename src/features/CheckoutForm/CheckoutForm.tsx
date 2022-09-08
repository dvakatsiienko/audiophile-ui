/* Core */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

/* Components */
import {
    H6, ActionButton, Subtitle, Input, Radio, Number
} from '@/ui';

/* Instruments */
import { resolver, type FormShape } from './resolver';

export const CheckoutForm = (props: CheckoutFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        watch,
    } = useForm<FormShape>({
        resolver,
        mode:          'all',
        defaultValues: {
            name:          'dima',
            email:         'test@email.com',
            phone:         '111-11-11',
            paymentMethod: 'e-money',
        },
    });

    const [ count, setCount ] = useState(0);

    const router = useRouter();
    const [ checkoutState, setcheCkoutState ] = useState('waiting');

    const submit: SubmitHandler<FormShape> = async data => {
        console.log(data);
        props.onSubmit();

        const response = await fetch('/api/checkout', {
            method: 'POST',
            body:   JSON.stringify({ user: 'test' }),
        });

        const result = await response.json();

        setcheCkoutState(result.message);

        router.push('/');
    };

    watch('paymentMethod');
    const paymentMethod = getValues('paymentMethod');

    return (
        <Form onSubmit = { handleSubmit(submit) }>
            <Subtitle>Billing Details</Subtitle>

            <Input
                data-testid = 'input-name'
                error = { errors.name }
                placeholder = 'Insert your name'
                register = { register('name') }
            />

            <Input
                data-testid = 'input-email'
                error = { errors.email }
                placeholder = 'Insert your email'
                register = { register('email') }
            />

            <Input
                data-testid = 'input-phone'
                error = { errors.phone }
                placeholder = 'Insert your phone'
                register = { register('phone') }
            />

            <H6 data-testid = 'checkout-state'>{checkoutState}</H6>

            <Subtitle data-testid = 'form-title'>Payment Details</Subtitle>

            <Radio
                id = '1'
                isChecked = { paymentMethod === 'e-money' }
                label = 'e-Money'
                register = { register('paymentMethod') }
                value = 'e-money'
            />

            <Radio
                id = '2'
                isChecked = { paymentMethod === 'cash' }
                label = 'Cash on Delivery'
                register = { register('paymentMethod') }
                value = 'cash'
            />

            <Number
                decrement = { () => setCount(count - 1) }
                increment = { () => setCount(count + 1) }
                value = { count }
            />

            <ActionButton data-testid = 'button-submit' type = 'submit'>
                Continue & pay
            </ActionButton>
        </Form>
    );
};

/* Styles */
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

/* Types */
interface CheckoutFormProps {
    onSubmit: () => void;
}
