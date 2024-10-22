import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from './getLogin';
import { LoginFormSliceSchema } from '../reducers/LoginFormSliceSchema';
import {RegisterFormSliceSchema} from "@/store/reducers/RegisterFormSliceSchema";
import {getRegister} from "@/store/selectors/getRegister";

export const getRegisterPassword = createSelector(
    getRegister,
    (search: RegisterFormSliceSchema) => search.password,
);
export const getRegisterUsername = createSelector(
    getRegister,
    (search: RegisterFormSliceSchema) => search.username,
);

export const getRegisterFirstName = createSelector(
    getRegister,
    (search: RegisterFormSliceSchema) => search.firstName,
);

export const getRegisterLastname = createSelector(
    getRegister,
    (search: RegisterFormSliceSchema) => search.lastName,
);
export const getRegisterIsloading = createSelector(
    getRegister,
    (search: RegisterFormSliceSchema) => search.isLoading,
);
export const getRegisterError = createSelector(
    getRegister,
    (search: RegisterFormSliceSchema) => search.error,
);
