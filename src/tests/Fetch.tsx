import React, { useState, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    error:    null,
    greeting: null,
};

type Action = {
    type: 'SUCCESS' | 'ERROR';
    greeting?: any;
    error?: Error;
};

function greetingReducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case 'SUCCESS': {
            return {
                error:    null,
                greeting: action.greeting,
            };
        }
        case 'ERROR': {
            return {
                error:    action.error,
                greeting: null,
            };
        }
        default: {
            return state;
        }
    }
}

export const Fetch = (props: { url: string }) => {
    // @ts-ignore
    const [{ error, greeting }, dispatch ] = useReducer(greetingReducer, initialState);
    const [ buttonClicked, setButtonClicked ] = useState(false);

    const fetchGreeting = async (url: string) => axios
        .get(url)
        .then((response: any) => {
            const { data } = response;
            const { greeting } = data;

            // @ts-ignore
            dispatch({ type: 'SUCCESS', greeting });
            setButtonClicked(true);
        })
        .catch((error: Error) => {
            // @ts-ignore
            dispatch({ type: 'ERROR', error });
        });

    const buttonText = buttonClicked ? 'Ok' : 'Load Greeting';

    return (
        <div>
            <button disabled = { buttonClicked } type = 'button' onClick = { () => fetchGreeting(props.url) }>
                {buttonText}
            </button>
            {greeting && <h1>{greeting}</h1>}
            {error && <p role = 'alert'>Oops, failed to fetch!</p>}
        </div>
    );
};
