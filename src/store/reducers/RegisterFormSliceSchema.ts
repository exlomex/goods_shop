export interface RegisterFormSliceSchema {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}