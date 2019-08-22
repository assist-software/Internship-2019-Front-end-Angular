export interface User {
    id?: number;
    role: string;
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    token: string;
}
