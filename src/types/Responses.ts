export interface AuthResponse {
    username: string;
    role: string;
}

export interface LoginResponse {
    message?: string;
    username: string;
    role: string;
}