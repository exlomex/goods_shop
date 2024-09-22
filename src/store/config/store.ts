import { ReducersMapObject } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {StateSchema, ThunkExtraArg} from './StateSchema';
import {LoginFormReducer} from "../reducers/LoginFormSlice";
import {UserSliceReducer} from "../reducers/UserSlice";
import {$api} from "@/api/Api";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loginForm: LoginFormReducer,
        user: UserSliceReducer,
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
            })
                // .concat(rtkApi.middleware),
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
