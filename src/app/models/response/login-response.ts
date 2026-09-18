export interface LoginResponse {
  data?: LoginDataResponse;
}

export interface LoginDataResponse {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  user?: UsuarioLoginResponse;
}

export interface UsuarioLoginResponse {
  id?: number;
  name?: string;
  email?: string;
}