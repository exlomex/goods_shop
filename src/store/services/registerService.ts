import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '@/api/Api';
import { UserSliceActions } from '../reducers/UserSlice';
import {ThunkConfig} from "@/store/config/StateSchema";

export interface registerServiceProps {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}

export interface UserData {
    accessToken: string;
}

export const registerService = createAsyncThunk<UserData, registerServiceProps, ThunkConfig<string>>(
    '/registerService',
    async (AuthData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post('/auth/register', AuthData);

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
