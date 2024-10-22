import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RegisterFormSliceSchema} from "@/store/reducers/RegisterFormSliceSchema";
import {registerService} from "@/store/services/registerService";

const initialState: RegisterFormSliceSchema = {
    isLoading: false,
    username: '',
    password: '',
    firstName: '',
    lastName: ''
};
export const RegisterFormSlice = createSlice({
    name: 'registerForm',
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerService.pending, (state: RegisterFormSliceSchema) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(registerService.fulfilled, (state: RegisterFormSliceSchema, action) => {
                state.isLoading = false;
            })
            .addCase(registerService.rejected, (state: RegisterFormSliceSchema, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: RegisterFormActions } = RegisterFormSlice;
export const { reducer: RegisterFormReducer } = RegisterFormSlice;
