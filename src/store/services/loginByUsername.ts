import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '@/api/Api';
import { UserSliceActions } from '../reducers/UserSlice';
import {ThunkConfig} from "@/store/config/StateSchema";

export interface loginByUsernameProps {
    password: string;
    username: string;
}

export interface UserData {
    token: string;
}

export const loginByUsername = createAsyncThunk<UserData, loginByUsernameProps, ThunkConfig<string>>(
    '/loginByUsername',
    async (AuthData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            // const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''

            const response = await extra.api.post('/auth/login', AuthData);
            // const response = await extra.api.get('/health');

            if (!response.data) {
                throw new Error();
            }
            dispatch(UserSliceActions.setAuth(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
