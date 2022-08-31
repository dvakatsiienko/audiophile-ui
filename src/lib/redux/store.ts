/* Core */
import { configureStore } from '@reduxjs/toolkit';
import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    TypedUseSelectorHook
} from 'react-redux';

/* Instruments */
import { reducer } from './rootReducer';

export const store = configureStore({ reducer });

/* Helpers */
export const useDispatch = () => useReduxDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type Store = typeof store;
export type ReduxState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
