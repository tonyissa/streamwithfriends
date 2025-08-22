export interface AuthResponse {
    username: string;
    role: string;
}

export interface HealthResponseHeaders extends Headers {
    StreamWithFriends: string
}

export interface LoginResponse {
    message?: string;
    username: string;
    role: string;
}