import {LoginFormSliceSchema} from "@/store/reducers/LoginFormSliceSchema";
import {UserSliceSchema} from "@/store/reducers/UserSliceSchema";
import {AxiosInstance} from "axios";
import {rtkApi} from "@/api/rtkApi";
import {RegisterFormSliceSchema} from "@/store/reducers/RegisterFormSliceSchema";


export interface StateSchema {
    loginForm: LoginFormSliceSchema,
    user: UserSliceSchema,
    register: RegisterFormSliceSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
