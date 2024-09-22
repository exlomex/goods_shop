import { createSelector } from '@reduxjs/toolkit';
import { getUser } from './getUser';
import { UserSliceSchema } from '../reducers/UserSliceSchema';

export const getUserAuth = createSelector(
    getUser,
    (user: UserSliceSchema) => user.isAuth,
);
