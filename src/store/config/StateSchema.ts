import {LoginFormSliceSchema} from "@/store/reducers/LoginFormSliceSchema";
import {UserSliceSchema} from "@/store/reducers/UserSliceSchema";
import {AxiosInstance} from "axios";


export interface StateSchema {
    loginForm: LoginFormSliceSchema
    user: UserSliceSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
