import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from './getLogin';
import { LoginFormSliceSchema } from '../reducers/LoginFormSliceSchema';

export const getLoginPassword = createSelector(
    getLogin,
    (search: LoginFormSliceSchema) => search.password,
);
export const getLoginUsername = createSelector(
    getLogin,
    (search: LoginFormSliceSchema) => search.username,
);
export const getLoginIsloading = createSelector(
    getLogin,
    (search: LoginFormSliceSchema) => search.isLoading,
);
export const getLoginError = createSelector(
    getLogin,
    (search: LoginFormSliceSchema) => search.error,
);
