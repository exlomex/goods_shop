import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormSliceSchema } from './LoginFormSliceSchema';
import { loginByUsername } from '../services/loginByUsername';

const initialState: LoginFormSliceSchema = {
    isLoading: false,
    username: '',
    password: '',
};
export const LoginFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state: LoginFormSliceSchema) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.fulfilled, (state: LoginFormSliceSchema, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state: LoginFormSliceSchema, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: LoginFormActions } = LoginFormSlice;
export const { reducer: LoginFormReducer } = LoginFormSlice;
