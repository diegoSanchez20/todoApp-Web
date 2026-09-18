export interface RegisterResponse {
    data?: RegisterDataResponse;
}

export interface RegisterDataResponse {
    id?: number;
    name?: string;
    email?: string;
}