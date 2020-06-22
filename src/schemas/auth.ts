export interface OAuthPasswordRequest {
  grant_type: "password";
  client_id: string;
  client_secret: string;
  email: string;
  password: string;
}

export interface OAuthRefreshRequest {
  grant_type: "refresh_token";
  client_id: string;
  client_secret: string;
  refresh_token: string;
}

export interface OAuthResponse {
  access_token: string;
  token_type: "bearer";
  expires_in: number;
  refresh_token: string;
  created_at: number;
}
