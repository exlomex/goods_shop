import { ReducersMapObject } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {StateSchema, ThunkExtraArg} from './StateSchema';
import {LoginFormReducer} from "../reducers/LoginFormSlice";
import {UserSliceReducer} from "../reducers/UserSlice";
import {$api} from "@/api/Api";
import {rtkApi} from "@/api/rtkApi";
import {RegisterFormReducer} from "@/store/reducers/RegisterFormSlice";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loginForm: LoginFormReducer,
        register: RegisterFormReducer,
        user: UserSliceReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware)
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
