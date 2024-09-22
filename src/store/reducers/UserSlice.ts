import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../services/loginByUsername';
import { UserSliceSchema } from './UserSliceSchema';
import { USER_LOCALSTORAGE_KEY } from '@/consts/localStorage';

const initialState: UserSliceSchema = {
    isAuth: false,
};
export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth: (state: UserSliceSchema, action: PayloadAction<UserData>) => {
            state.isAuth = true;
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.token);
        },
        logout: (state: UserSliceSchema) => {
            state.isAuth = false;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
        initAuth: (state: UserSliceSchema) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (token) {
                state.isAuth = true;
            }
        },
    },
});

export const { actions: UserSliceActions } = UserSlice;
export const { reducer: UserSliceReducer } = UserSlice;
