export interface LoginFormSliceSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}
