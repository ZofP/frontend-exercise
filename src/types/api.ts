export enum CookieKey {
  AccessToken = "accessToken",
}

export interface ExtendedRequestInit extends Omit<RequestInit, "body"> {
  body?: Record<string, unknown>;
}
