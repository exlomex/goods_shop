import {LoginFormSliceSchema} from "@/store/reducers/LoginFormSliceSchema";
import {UserSliceSchema} from "@/store/reducers/UserSliceSchema";
import {AxiosInstance} from "axios";
import {rtkApi} from "@/api/rtkApi";


export interface StateSchema {
    loginForm: LoginFormSliceSchema,
    user: UserSliceSchema,
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
